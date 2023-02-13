import React, { useState, useEffect } from 'react';
import ImportData from  '../data/data.json'

function Calendar(props) {
    const [calendarMonth, setCalendarMonth] = useState(grabPresentDate().thisMonthNumber);
    const [givenData, setGivenData] = useState(ImportData);
    const days = daysInMonth(calendarMonth, grabPresentDate().thisYearNumber);
    const monthDetails = datesDayMonth(days, calendarMonth);
    
    const userMonth = givenData.find((data) => {
        return data.user === 'testID'
    });
    const monthInfo = userMonth.month.find((data) => {
        return data.month === calendarMonth;
    })

    const addMonth = () => {
        const newMonthData = {
            month: calendarMonth,
            Year: 2023,
            date: []
        }
        userMonth.month.push(newMonthData);
    }

    let weekCount = monthDetails[Object.keys(monthDetails).length - 1].week;
    const handleCalenderWeek = [...Array(weekCount)].map((e, i) => <WeekCard addMonth={addMonth} userData={monthInfo} monthData={monthDetails} weekNum={i + 1} key={i}/>)

    const monthDisplayText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handlePreviousMonth = (event) => {
        if(calendarMonth > 1) {
            setCalendarMonth(calendarMonth - 1)
        }
    }

    const handleNextMonth = (event) => {
        if(calendarMonth < 12) {
            setCalendarMonth(calendarMonth + 1)
        }
    }

    return (
        <div className="container text-center bg-white">
            <div className="row header-calendar">
                <div className="col">
                    <button onClick={handlePreviousMonth} type="button" className="btn btn-dark">{'<'}</button>
                </div>
                <div className="col">{monthDisplayText[calendarMonth - 1]}</div>
                <div className="col">
                    <button onClick={handleNextMonth} type="button" className="btn btn-dark">{'>'}</button>
                </div>
            </div>
            <div className="row">
                <div className="col">Sunday</div>
                <div className="col">Monday</div>
                <div className="col">Tuesday</div>
                <div className="col">Wednesday</div>
                <div className="col">Thursday</div>
                <div className="col">Friday</div>
                <div className="col">Saturday</div>
            </div>
                {handleCalenderWeek}
        </div>
    );
}

// a function to references today's date
function grabPresentDate() {
    const newDate = new Date();
    return {
        thisDate: newDate,
        thisYearNumber: newDate.getFullYear(),
        thisMonthNumber: newDate.getMonth() + 1
    }
}

// a function that returns the amount of days in a given month and year
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Creating objects of each date containing year, date number, and month
function datesDayMonth(day, givenMonth) {
    // Creates each date of today's month into an object
    const dateData = [...Array(day)].map((e, i) => {
        let dayOfWeekNumber = new Date(givenMonth +  ' ' + (i + 1) + ', ' + grabPresentDate().thisYearNumber).getDay();
        const dayInfo = {
            date: (i + 1),
            dayofWeek: dayOfWeekNumber,
            month: givenMonth
        }
        return dayInfo;
    })
    // Apply the week number of each date
    let weekCount = 1;
    const realTimeDates = dateData.map((givenDate) => {
        givenDate['week'] = weekCount;
        if(givenDate.dayofWeek === 6) {
            weekCount+=1;
        }
        return givenDate
    })
    return realTimeDates;
}

// function that creates the rows for each week
export function WeekCard(props) {
    const filterWeek = props.monthData.filter((data) => {
        return data.week === props.weekNum;
    })
    checkWeekData(filterWeek);
    const displayWeek = filterWeek.map((data) => <DayCard addMonth={props.addMonth} userData={props.userData} dayInfo={data} key={data.date + data.dayofWeek}/>)
    return (
        <div className="row">
            {displayWeek}
        </div>
    );
}

// Corrects the first and last week of each month
function checkWeekData(data) { 
    if(data.length < 7) {
        for (let i = 0; i < 7; i++) {
            if (data[i] === undefined) {
                const dayInfo = {
                    date: '',
                    dayofWeek: -1 * i,
                    month: grabPresentDate().thisMonthNumber
                }
                data.push(dayInfo)
            }
        }
        if(data[0].week === 1) {
            data.sort(function(a, b) {return a.dayofWeek - b.dayofWeek});
        }
    }
}

// creates the information for each date
export function DayCard(props) {
    const [addNote, setAddNote] = useState('');
    // User Wake up and Sleep UseState
    const [storedNotes, setStoredNotes] = useState([]); // Users Notes Array UseState
    const [storedSleep, setStoredSleep] = useState('')
    const [storedWakeUp, setStoredWakeUp] = useState('')
    const dayInfo = props.dayInfo

    useEffect(() => {
        // checkData();
        if(props.userData !== undefined) {
            const userDateData = props.userData.date.find((data) => {
                return data.DateNum ===  dayInfo.date &&
                data.WeekdayNum === dayInfo.dayofWeek
            })
            if(userDateData !== undefined) {    
                setStoredNotes(userDateData.Notes);
                setStoredSleep(userDateData.TimeSleep);
                setStoredWakeUp(userDateData.TimeWakeUp);
            }
        }  
    }, [])

    const handleInputNote = (event) => {
        setAddNote(event.target.value);
    }

    const handleSleepChange = (event) => {
        setStoredSleep(event.target.value);
    }

    const handleWakeUpChange = (event) => {
        setStoredWakeUp(event.target.value);
    }

    const handleSubmit = () => {    
        // 0. Check if existing month data exists
        // 0a. If it doesn't, then make a new one
        console.log(props.userData);
        if(props.userData === undefined) {
            props.addMonth();
        }
          
        // 1. check if note exists for day
        let dateNotesData = props.userData.date.find((data) => {
            return data.DateNum === dayInfo.date &&
            data.WeekdayNum === dayInfo.dayofWeek
        })     
        // 1a. if it doesn't exists, then make a new one
        if (dateNotesData === undefined) {
            const newDateInfo = {
                DateNum: dayInfo.date,
                Notes: [],
                TimeSleep: "",
                TimeWakeUp: "",
                WeekdayNum: dayInfo.dayofWeek
            }
            props.userData.date.push(newDateInfo);
        }
        // 2. add notes to array
        setStoredNotes([...storedNotes, addNote]);
        // Clean Up
        setAddNote('');
    }

    // have blank card if date doesn't exist
    if (dayInfo.date === '') {
        return <div className='col'></div>
    }
    let highlightToday = 'btn';
    if (dayInfo.date === grabPresentDate().thisDate.getDate() &&
        dayInfo.month === grabPresentDate().thisMonthNumber) {
        highlightToday = highlightToday + ' border border-primary';
    }

    // Filter to get each date
    let dateNoteList = <></>;
    if(props.userData !== undefined) {
        let userDateData = props.userData.date.filter((data) => {
            return data.DateNum === dayInfo.date &&
            data.WeekdayNum === dayInfo.dayofWeek
        })    
        if(userDateData.length > 0) {
            highlightToday = highlightToday + ' bg-secondary';
            
            dateNoteList = storedNotes.map((note, i) => { //Replaces this
                return <DateNotes note={note} key={i}/>
            })
        }
    }

    const monthDisplayText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayofWeekDisplay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const onClickGetDiff = () => {
        var value_start = storedSleep.split(':');
        var value_end = storedWakeUp.split(':');

        var time_end = new Date();
        var time_start = new Date();
    
        if (value_start[0] >= 12) {
            time_start.setDate(time_start.getDate() - 1);
            if (value_end[0] >= 12) {;
                time_end.setDate(time_end.getDate() - 1);
            }
        }

        console.log(time_start, time_end)
    

        time_start.setHours(value_start[0], value_start[1], 0)
        time_end.setHours(value_end[0], value_end[1], 0)

        console.log((time_end - time_start) / 1000 / (60 * 60)) // millisecond 
    }

    return (
        <div className='col'>
            <a className={highlightToday} data-bs-toggle="offcanvas" href={'#date-' + dayInfo.date + '-' + dayInfo.month} role="button" aria-controls="offcanvasExample">
                {dayInfo.date}
            </a>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id={'date-' + dayInfo.date + '-' + dayInfo.month} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">{monthDisplayText[dayInfo.month - 1] + ' ' + dayInfo.date + ', ' + dayofWeekDisplay[dayInfo.dayofWeek]}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
                <div className="offcanvas-body">
                    <input placeholder='Time Slept Last Night' value={storedSleep} onChange={handleSleepChange} type="time" className="form-control mb-3" aria-label="Text input with dropdown button" />
                    <input placeholder='Time Woke Up' type="time" value={storedWakeUp} onChange={handleWakeUpChange} className="form-control mb-3" aria-label="Text input with dropdown button" />
                    <button className="btn btn-outline-secondary" type="button" onClick={onClickGetDiff}>Get Differences</button>
                    <ul className="list-group">
                        {dateNoteList}
                        <li className="list-group-item">
                            <div className='input-group'>
                                <input value={addNote} onChange={handleInputNote} type="text" className="form-control" placeholder="Add Notes" aria-label="text box" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>+</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function DateNotes(props) {
    return (
        <li className="list-group-item">
            {props.note}
        </li>
    );
}

export default Calendar;
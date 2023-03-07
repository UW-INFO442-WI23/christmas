'use strict';
import React, { useState, useEffect } from 'react';
import blankData from '../data/blank-user.json'
import Footer from "./Footer";
import { get, getDatabase, ref, update, set } from 'firebase/database';
import rocketImage from "../img/rocket.png"

function Calendar(props) {
    // Calendar Values
    const [calendarMonth, setCalendarMonth] = useState(grabPresentDate().thisMonthNumber);
    const days = daysInMonth(calendarMonth, grabPresentDate().thisYearNumber);
    const monthDetails = datesDayMonth(days, calendarMonth);
    // Setting Values for Weekly Summary
    const [selectSummary, setSelectSummary] = useState('0');
    const [weekRange, setWeekRange] = useState(0);
    // Assign Values
    const givenData = props.importData;
    const user = props.user;

    // Create a new dataset on firebase if it's a new User
    if(props.loggedIn) {
        const db = getDatabase();
        const pathway = '/AllData/' + props.user.uid;
        get(ref(db, pathway)).then((snapshot) => {
            if(!snapshot.exists()) {
                props.handleNewUser()
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    // Loads display data for calendar
    // If user log in, then grabs data from firebase.
    // If user isn't log in, then grab data from local json file.
    let userMonth = {};
    let monthInfo = {}
    if(props.loggedIn) {
        Object.keys(givenData).forEach(keys => {
            if(givenData[keys].user === user.email) {
                userMonth = givenData[keys]
            }
        })
        if (Object.keys(userMonth).length === 0) {
            return <></>;
        }
        userMonth.month.forEach(month => {
            if(month.month === calendarMonth) {
                monthInfo = month;
            }
        })
    } else {
        userMonth = blankData;
        userMonth.month.forEach(month => {
            if(month.month === calendarMonth) {
                monthInfo = month;
            }
        })
    }

    // Callback function to reset values for Weekly Summary
    const resetWeekRecap = () => {
        setSelectSummary('0');
        setWeekRange(0);
    }

    // Grabs the amount of weeks in the given month
    let weekCount = monthDetails[Object.keys(monthDetails).length - 1].week;
    // Create the display data of each week for given month.
    const handleCalenderWeek = [...Array(weekCount)].map((e, i) => <WeekCard loggedIn={props.loggedIn} setWeekRange={resetWeekRecap} user={user} userData={monthInfo} monthData={monthDetails} weekNum={i + 1} key={i}/>)
    const monthDisplayText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Switch calendar to the preivous month, if it's not January.
    const handlePreviousMonth = (event) => {
        if(calendarMonth > 1) {
            setCalendarMonth(calendarMonth - 1);
            resetWeekRecap()
        }
    }

    // Switch calendar to the next month, if it's not December.
    const handleNextMonth = (event) => {
        if(calendarMonth < 12) {
            setCalendarMonth(calendarMonth + 1);
            resetWeekRecap()
        }
    }

    return (
        <>
            <div className="container text-center bg-white">
                <div className="row header-calendar">
                    <div>
                        <h1 className='calendar-header'>Calendar</h1>
                        {props.loggedIn && <h2 className='calendar-header'>Welcome, {user.displayName}</h2>}
                    </div>
                    <div className="col">
                        <button onClick={handlePreviousMonth} type="button" className="btn btn-dark">{'<'}</button>
                    </div>
                    <div className="col calendar-month">{monthDisplayText[calendarMonth - 1]}</div>
                    <div className="col">
                        <button onClick={handleNextMonth} type="button" className="btn btn-dark">{'>'}</button>
                    </div>
                </div>
                <div className="row calendar-days">
                    <div className="col">Sun</div>
                    <div className="col">Mon</div>
                    <div className="col">Tues</div>
                    <div className="col">Wed</div>
                    <div className="col">Thu</div>
                    <div className="col">Fri</div>
                    <div className="col">Sat</div>
                </div>
                    {handleCalenderWeek}
                    <div><h1 className='summary-header'>Weekly Summary</h1></div>
                    <WeekRecap weekRange={weekRange} setWeekRange={setWeekRange} setSelectSummary={setSelectSummary} selectSummary={selectSummary} monthDetails={monthDetails} weekCount={weekCount} userData={monthInfo}/>
            </div>
            <Footer/>
        </>
    );
}

// function that creates Weekly Summary
export function WeekRecap(props) {
    // setting the weekly message"
    let weeklymessage = [];
    // these messages for good amount of sleep
    const goodAmount = ["Sleeping like a baby never looked so good!", 
                        "Get your zzz's and wake up with ease!", 
                        "Sweet dreams are made of good sleep!", 
                        "Catch some quality Z's and feel like a million bucks!",
                        "The best things in life are free, like a good night's sleep!",
                        "Sleep is the ultimate beauty treatment, and you deserve to wake up looking fabulous!",
                        "Want to be a superhero tomorrow? Start by getting a good night's sleep tonight!",
                        "A good night's sleep is like hitting the reset button on your body and mind!",
                        "Say goodbye to dark circles and hello to sweet dreams!",
                        "Don't let insomnia be your arch-nemesis; conquer it with a good night's sleep!"
                    ]
    // these messages for bad amount of sleep
    const badAmount = ["Without sleep, you're just a zombie in disguise!",
                       "Sleep deprivation is like a bad hair day for your brain!",
                       "No beauty sleep, no beauty glow!",
                       "Sleep is free, but the cost of not getting enough is high!",
                       "Sleep is not a luxury, it's a necessity!",
                       "You can't run on empty, so get some sleep!",
                       "Want to feel like a grumpy cat? Just skip your sleep!",
                       "The night is too short to skip sleep!",
                       "Sleeping is like hitting the save button for your brain, don't forget to save!",
                       "If you're feeling like a walking dead, you might need some shut-eye!"
                    ]
    // if weekly average is greater than or equal to 7 hours, it will display a message from a good amount of sleep 
    if(props.weekRange >= 7){
        weeklymessage.push(goodAmount[Math.floor(Math.random() * 10)]);
    // if weekly average is greater than 0 and less than 7 hours, it will display a message from a bad amount of sleep 
    }else if (props.weekRange > 0 && props.weekRange < 7 ) {
        weeklymessage.push(badAmount[Math.floor(Math.random() * 10)])
    }
    // Created an Array of data
    const selectWeek = {}
    for(let i=1; i<= props.weekCount; i++) {
        const weekData = props.monthDetails.filter(data => {
            return data.week === i;
        })
        selectWeek[i] = weekData;
    }

    const dayofWeekDisplay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Create a week selector
    const displaySelectGroup = Object.keys(selectWeek).map(element => {
        const weekDate = selectWeek[element];
        const firstDayOfWeek = weekDate[0];
        const lastDayOfWeek = weekDate[weekDate.length - 1];
        return (
            <option value={element} key={element}>
                {dayofWeekDisplay[firstDayOfWeek.dayofWeek] + ", " + firstDayOfWeek.date + " - " + dayofWeekDisplay[lastDayOfWeek.dayofWeek] + ", " + lastDayOfWeek.date}
            </option>
        )
    })

    // Change the average amount of sleep based on Week Selected
    const handleWeekChange = (event) => {
        props.setSelectSummary(event.target.value)
        let weekValue = parseInt(event.target.value)

        const dateNotesData = []
        Object.keys(props.userData.date).find(key => {
            let data = props.userData.date[key];
            if(weekValue === data.Week) {
                dateNotesData.push(props.userData.date[key]);
            }
        })

        let sleepDataSum = 0;
        dateNotesData.forEach(element => {
            sleepDataSum += grabDifferences(element.TimeSleep, element.TimeWakeUp);
        })

        props.setWeekRange(Math.round(sleepDataSum / dateNotesData.length * 10) / 10 || 0); //Set value based on averages or 0 if there's non
    }

    return (
        <div className="row bg-body-secondary">
            <select className="form-select" aria-label="Default select example" onChange={handleWeekChange} value={props.selectSummary}>
                <option value='0'>Select a Week</option>
                {displaySelectGroup}
            </select>
            <p className="p-3 mb-2 text-dark average-num-sleep">Average Hours of Sleep: {props.weekRange}</p>
            <p className='week-message'>{weeklymessage}</p>
        </div>
    );
}

// Return the time in hour based on two times
function grabDifferences(timeSleep, timeWakeUp) {
    var value_start = timeSleep.split(':');
    var value_end = timeWakeUp.split(':');

    var time_end = new Date();
    var time_start = new Date();

    if (value_start[0] >= 12) {
        time_start.setDate(time_start.getDate() - 1);
        if (value_end[0] >= 12) {;
            time_end.setDate(time_end.getDate() - 1);
        }
    }

    time_start.setHours(value_start[0], value_start[1], 0)
    time_end.setHours(value_end[0], value_end[1], 0)

    return (time_end - time_start) / 1000 / (60 * 60);
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
        // Adjust Month for date functio
        let adjustDate = (i + 1) + "";
        if (adjustDate < 10) {
            adjustDate = "0" + adjustDate;
        }

        // Adjust Month for date function
        let adjustMonth = givenMonth + "";
        if (givenMonth < 10) {
            adjustMonth = "0" + adjustMonth;
        }
        let dayOfWeekNumber = new Date(grabPresentDate().thisYearNumber +  "-" + adjustMonth + "-" + adjustDate + "T12:00:00").getDay();
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
    const displayWeek = filterWeek.map((data, i) => <DayCard loggedIn={props.loggedIn} setWeekRange={props.setWeekRange} user={props.user} userData={props.userData} dayInfo={data} key={i + data.date + "" + data.dayofWeek + "" + data.month}/>)
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
    const [storedNotes, setStoredNotes] = useState([""]); // Users Notes Array UseState
    const [storedSleep, setStoredSleep] = useState('')
    const [storedWakeUp, setStoredWakeUp] = useState('')
    const [notesWarning, setNotesWarning] = useState(false)
    const [timeWarning, setTimeWarning] = useState(false)
    const [successUpdate, setSuccessUpdate] = useState(false);
    const dayInfo = props.dayInfo

    useEffect(() => {
        // Set stored values based on data found
        if(props.userData !== undefined) {
            let userDateData = {};
            Object.keys(props.userData.date).find(key => {
                let data = props.userData.date[key];
                if(data.DateNum === dayInfo.date && data.WeekdayNum === dayInfo.dayofWeek) {
                    userDateData = props.userData.date[key];
                }
            }) 
            if(userDateData !== undefined) {    
                setStoredSleep(userDateData.TimeSleep || "");
                setStoredWakeUp(userDateData.TimeWakeUp || "");
                setStoredNotes(userDateData.Notes || [""]);
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

    const checkDataExist = () => {
        let dateNotesData = {};
        Object.keys(props.userData.date).find(key => {
            let data = props.userData.date[key];
            if(data.DateNum === dayInfo.date && data.WeekdayNum === dayInfo.dayofWeek) {
                dateNotesData = props.userData.date[key];
            }
        }) 

        let noteList = [...storedNotes];
        if(addNote !== "") {
            noteList = [...storedNotes, addNote]
        }

        const newDateInfo = {
            DateNum: dayInfo.date,
            WeekdayNum: dayInfo.dayofWeek,
            Week: dayInfo.week,
            TimeSleep: storedSleep,
            TimeWakeUp: storedWakeUp,
            Notes: noteList,
        }
        props.userData.date[dayInfo.date] = newDateInfo;
        
        // Push to Firebase
        // If statment, if data exist, then update, else set new values
        if(props.loggedIn) {
            const db = getDatabase();
            const pathway = '/AllData/' + props.user.uid + '/month/' + (dayInfo.month - 1) + '/date/' + dayInfo.date;
            get(ref(db, pathway)).then((snapshot) => {
                if(snapshot.exists()) {
                    update(ref(db, pathway), {
                        TimeSleep: storedSleep,
                        TimeWakeUp: storedWakeUp,
                        Notes: noteList,
                    })
                } else {
                    set(ref(db, pathway), newDateInfo);
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const handleSubmitNote = () => {
        if (addNote !== "") {
            setStoredNotes([...storedNotes, addNote]);
            checkDataExist();
            setAddNote('');
        } else {
            setNotesWarning(true);
        }
    }

    const handleSubmitTime = () => {
        if (storedSleep !== "" && storedWakeUp !== "") {
            setSuccessUpdate(true);
            props.setWeekRange(0);
            checkDataExist();
        } else {
            setTimeWarning(true)
        }
    }

    // have blank card if date doesn't exist
    if (dayInfo.date === '') {
        return <div className='col display-col'></div>
    }
    let highlightToday = 'btn';
    if (dayInfo.date === grabPresentDate().thisDate.getDate() &&
        dayInfo.month === grabPresentDate().thisMonthNumber) {
        highlightToday = highlightToday + ' border border-primary';
    }

    // Filter to get each date
    let dateNoteList = <></>;

    let dateNotesData = {};
    Object.keys(props.userData.date).find(key => {
        let data = props.userData.date[key];
        if(data.DateNum === dayInfo.date && data.WeekdayNum === dayInfo.dayofWeek) {
            dateNotesData = props.userData.date[key];
        }
    })

    // Return a list of notes if there's nots
    if(dateNotesData.Notes !== undefined) {
        dateNoteList = dateNotesData.Notes.map((note, i) => {
            if(note !== '') {
                return <DateNotes note={note} key={i}/>
            }
            return <></>;
        })
    }

    if(Object.keys(dateNotesData).length !== 0) {
        const dateNoteList = dateNotesData.Notes.filter((note, i) => {
            return note !== '';
        })
        if(dateNotesData.TimeSleep !== "" && dateNotesData.TimeWakeUp !== "") {
            if (dayInfo.date === grabPresentDate().thisDate.getDate() && dayInfo.month === grabPresentDate().thisMonthNumber) {
                highlightToday = highlightToday + " bg-primary text-white"
            } else {
                highlightToday = highlightToday + " bg-secondary text-white"
            }
        } 
    }

    const monthDisplayText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayofWeekDisplay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='col display-col'>
            <a className={highlightToday} data-bs-toggle="offcanvas" href={'#date-' + dayInfo.date + '-' + dayInfo.month} role="button" aria-controls="offcanvasExample">
                {dayInfo.date}
            </a>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id={'date-' + dayInfo.date + '-' + dayInfo.month} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">{monthDisplayText[dayInfo.month - 1] + ' ' + dayInfo.date + ', ' + dayofWeekDisplay[dayInfo.dayofWeek]}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
                <div className="offcanvas-body">
                    <p className='text-dark'>Time Sleep the Day Before</p>
                    <input placeholder='Time Slept Last Night' value={storedSleep} onChange={handleSleepChange} type="time" className="form-control mb-3" aria-label="Text input with dropdown button" />
                    <p className='text-dark'>Time Wake Up</p>
                    <input placeholder='Time Woke Up' type="time" value={storedWakeUp} onChange={handleWakeUpChange} className="form-control mb-3" aria-label="Text input with dropdown button" />
                    <button className="btn btn-outline-secondary mb-3" type="button" onClick={handleSubmitTime}>Update Time</button>
                    {/* Display Successful Upadte */}
                    {successUpdate && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success! </strong> Time has been updated!
                        <button type="button" className="ms-1 btn btn-outline-success" onClick={() => setSuccessUpdate(false)}><strong>X</strong></button>
                    </div> }
                    {/* Check Time Upadte */}
                    {timeWarning && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Warning: </strong> Time Input can't be empty
                        <button type="button" className="ms-1 btn btn-outline-warning" onClick={() => setTimeWarning(false)}><strong>X</strong></button>
                    </div> }
                    {/* Check Notes Update */}
                    {notesWarning && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Warning: </strong> Value can't be empty 
                        <button type="button" className="ms-1 btn btn-outline-warning" onClick={() => setNotesWarning(false)}><strong>X</strong></button>
                    </div> }
                    <ul className="list-group">
                        {dateNoteList}
                        <li className="list-group-item">
                            <div className='input-group'>
                                <input value={addNote} onChange={handleInputNote} type="text" className="form-control" placeholder="Add Notes" aria-label="text box" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={handleSubmitNote}>+</button>
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
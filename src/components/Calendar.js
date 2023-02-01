import React, { useState } from 'react';

function Calendar() {
    const [calendarMonth, setCalendarMonth] = useState(grabPresentDate().thisMonthNumber);
    const days = daysInMonth(calendarMonth, grabPresentDate().thisYearNumber);
    const monthDetails = datesDayMonth(days, calendarMonth);
    
    let weekCount = monthDetails[Object.keys(monthDetails).length - 1].week;
    const handleCalenderWeek = [...Array(weekCount)].map((e, i) => <WeekCard monthData={monthDetails} weekNum={i + 1} key={i}/>)

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
            <div className="row">
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
    const displayWeek = filterWeek.map((data) => <DayCard dayInfo={data} key={data.date + data.dayofWeek}/>)
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
export function DayCard(props){ 
    const dayInfo = props.dayInfo
    // have blank card if date doesn't exist
    if (dayInfo.date === '') {
        return <div className='col'></div>
    }
    let highlightToday = 'btn';
    if (dayInfo.date === grabPresentDate().thisDate.getDate() &&
        dayInfo.month === grabPresentDate().thisMonthNumber) {
        highlightToday = 'btn border border-primary';
    }

    const monthDisplayText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayofWeekDisplay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(dayInfo)
    return (
        <div className='col'>
            <a className={highlightToday} data-bs-toggle="offcanvas" href={'#date-' + dayInfo.date + '-' + dayInfo.month} role="button" aria-controls="offcanvasExample">
                {dayInfo.date}
            </a>

            <div className="offcanvas offcanvas-end" tabindex="-1" id={'date-' + dayInfo.date + '-' + dayInfo.month} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">{monthDisplayText[dayInfo.month - 1] + ' ' + dayInfo.date + ', ' + dayofWeekDisplay[dayInfo.dayofWeek]}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {'#date-' + dayInfo.date + '-' + dayInfo.month}
            </div>
            </div>
        </div>
    );
}

export default Calendar;
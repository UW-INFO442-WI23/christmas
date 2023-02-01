import React from 'react';

function Calendar() {
    const todayDate = new Date();
    const todayMonth = todayDate.getMonth() + 1;
    const days = daysInMonth(todayMonth, 2023); // returns amount of days of given month
    const monthDetails = datesDayMonth(days);
    
    let weekCount = monthDetails[Object.keys(monthDetails).length - 1].week;
    const handleCalenderWeek = [...Array(weekCount)].map((e, i) => <WeekCard monthData={monthDetails} weekNum={i + 1} key={i}/>)

    return (
        <div className="container text-center bg-white">
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

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function datesDayMonth(day) {
    const dateData = [...Array(day)].map((e, i) => {
        let todayDate = new Date();
        let todayMonth =  todayDate.getMonth() + 1;
        let dayOfWeekNumber = new Date(todayMonth +  ' ' + (i + 1) + ', 2023').getDay();
        const dayInfo = {
            date: (i + 1),
            dayofWeek: dayOfWeekNumber,
            month: todayMonth
        }
        return dayInfo;
    })
    
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

function checkWeekData(data) { 
    if(data.length < 7) {
        const todayDate = new Date();
        let todayMonth =  todayDate.getMonth() + 1;
        for (let i = 0; i < 7; i++) {
            if (data[i] === undefined) {
                const dayInfo = {
                    date: '',
                    dayofWeek: -1 * i,
                    month: todayMonth
                }
                data.push(dayInfo)
            }
        }
        if(data[0].week === 1) {
            data.sort(function(a, b) {return a.dayofWeek - b.dayofWeek});
        }
    }
}

export function DayCard(props){ 
    const dayInfo = props.dayInfo
    return (
        <div className="col">{dayInfo.date}</div>
    );
}

export default Calendar;
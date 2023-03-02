
let years
let remindMonth


// when timer is goes 00 to all then bDay wish show
function wishHappyBirthday(){
    setTimeout(() => {
        document.body.style.backgroundImage ="url('./images/BirthdayWish.gif')";
        document.querySelector('h1').innerHTML = 'Happy Birth Day Md Farhan'
        document.querySelector('h1').style.color='#BAD7E9'
      }, 1000)
   
    }
// time Format When time is goes Less then 10 it will add 0 front of it
function timeFormat(time) {
        return time < 10 ? `0${time}` : time
}

// Bday Reminder
function birthDayReminder() {
    let date=new Date()
    let CurrentMonths = date.getMonth()+1
    let FixedMonth=3
    if(CurrentMonths<3)
        remindMonth=FixedMonth-CurrentMonths
    else
        remindMonth=12-(CurrentMonths-FixedMonth)
    
    years=date.getFullYear()+1
    let birthdayDate = Date.parse(`March 02 ${years}`);
    let currentDate = Date.parse(date)
    let totalSeconds = (birthdayDate - currentDate) / 1000
    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor((totalSeconds / 3600) % 24)
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60

    // let days=0,hours=0,minutes=0,seconds=0
    //birthday Wish
    if (seconds === 0 &&
        minutes === 0 &&
        hours === 0 &&
        days === 0 ) {
            wishHappyBirthday();
    }
    else {
        document.querySelector('.day').innerHTML = timeFormat(days)
        document.querySelector('.hrs').innerHTML = timeFormat(hours)
        document.querySelector('.min').innerHTML = timeFormat(minutes)
        document.querySelector('.sec').innerHTML = timeFormat(seconds)
        document.querySelector('.month').innerHTML = timeFormat(remindMonth)
    }
}

setInterval(() => birthDayReminder());

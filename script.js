
// when timer is goes 00 to all then bDay wish show
function wishHappyBirthday(){
    document.body.style.backgroundImage ="url('./images/BirthdayWish.gif')";
    document.querySelector('h1').innerHTML = 'Happy Birth Day Md Farhan'
    document.querySelector('h1').style.color='#E1EEDD'
    }
// time Format When time is goes Less then 10 it will add 0 front of it
function timeFormat(time) {
        return time < 10 ? `0${time}` : time
}

// Bday Reminder
function birthDayReminder() {
    let birthdayDate = Date.parse('March 03 2023');
    let currentDate = Date.parse(new Date())
    let totalSeconds = (birthdayDate - currentDate) / 1000
    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor((totalSeconds / 3600) % 24)
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60
    let months = Math.floor(days / 30) % 12

    // let days=0,hours=0,minutes=0,seconds=0,months=0
    //birthday Wish
    if (seconds === 0 &&
        minutes === 0 &&
        hours === 0 &&
        days === 0 &&
        months === 0) {
            wishHappyBirthday()
    }
    else {
        document.querySelector('.day').innerHTML = timeFormat(days)
        document.querySelector('.hrs').innerHTML = timeFormat(hours)
        document.querySelector('.min').innerHTML = timeFormat(minutes)
        document.querySelector('.sec').innerHTML = timeFormat(seconds)
        document.querySelector('.month').innerHTML = timeFormat(months)
    }
}

setInterval(() => birthDayReminder());

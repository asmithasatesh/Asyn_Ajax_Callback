//Usecase 1: Demonstrate Async nature of JavaScript
function showTime(){
    const date = new Date();
    return "Hours : "+date.getHours()+" Mins : "+date.getMinutes()+" Seconds :"+date.getSeconds();
}
function showSessionExpire(){
    console.log('Activity-B : Your session Expired at '+showTime());
}
console.log('Activity-A: Trigerring Activity-B at '+showTime());

//Activity B is triggered after Activity A is over
setTimeout(showSessionExpire,5000);
console.log('Activity-A: Trigerring Acitvity-B at '+showTime()+ " will execute after 5 seconds")
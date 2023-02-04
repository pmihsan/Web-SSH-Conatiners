function currTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var mod = "AM";

    if(hour == 0) hour = 12;
    if(hour > 12){
        hour -= 12;
        mod = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    var time = hour + ":" + minute + ":" + second + " " + mod;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(currTime, 1000);
}

currTime();
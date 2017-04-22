

function updateTimer(deadline) {
    var time = deadline - new Date();
    
    return {
        'days': Math.floor( time/(1000*60*60*24) ),
        'hours': Math.floor( (time/(1000*60*60)) % 24 ),
        'minutes': Math.floor( (time/1000/60) % 60 ),
        'seconds': Math.floor( (time/1000) % 60 ),
        'total' : time
    }
    
}


function animateClock() {
    span.className = "";
    
    setTimeout(function() {
            span.className = "";
    },1000);
    
}


function startTimer(id, deadline) {
    
    var timerInt = setInterval(function() {
        var timer = updateTimer(deadline);
        var clock = document.getElementById(id);
        
        clock.innerHTML = "<span>" + timer.days + "<span>"
                        + "<span>" + timer.hours + "<span>"
                        + "<span>" + timer.minutes + "<span>"
                        + "<span>" + timer.seconds + "<span>"
        
        
        
        var spans = document.getElementsByTagName("span");
        animateClock(spans[3]);
        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.minutes == 59 && timer.seconds == 59 && timer.hours == 23) animateClock(span[0]);
        
        
        
        if (timer.total < 1) {
            cleanInterval(timerInt);
            clock.innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
            
        }
        
    }, 1000);
    
}


window.onload = function(){
  var deadline = new Date("June 5, 2017 18:00:00");
  startTimer("clock", deadline);
};
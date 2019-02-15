function startYouTubeVideoAtAGivenTime(){


    function get24Time(){

        var d = new Date();
        var curr_hour = d.getHours();
        var curr_min = d.getMinutes();
        
        var curr_sec = d.getSeconds();
        
        return curr_hour+ ":"+ curr_min+":"+ curr_sec;
    }
    
    function getNearestMinute(timeString, delay){
        
        delay = delay === undefined ? 0 : delay;
        
        timeString = get24Time().split(":");
        timeString[1]++;
        return timeString[0]+":"+ timeString[1] +":"+ delay;
    }
    
    var timesGiven= prompt(`Start video at a time
    
    Time(hh, mm, ss), delay(ss)
    `, getNearestMinute() +", ").split(",");



    var time =  timesGiven[0].trim();
    var delay = timesGiven[1].trim();
    time = getNearestMinute(time, delay);
    
    

    function checktime(){
  
        if(get24Time() >= time){
            document.getElementsByTagName("video")[0].play();
            return true;
        }
        setTimeout(checktime, 300);
        return false;
    }

   setTimeout(checktime, 300);
}
startYouTubeVideoAtAGivenTime();
let hr = 0;
let min = 0;
let sec = 0 ;
let count = 0 ;

let timer = false;//will decide whether the timer is on or not 

function start(){
timer = true;
stopwatch();

}
function stop(){
timer = false ; 
}
function reset(){
    timer = false ; 
     hr = 0;
 min = 0;
 sec = 0 ;
 count = 0;
 document.getElementById("hour").innerHTML = "00";
 document.getElementById("Mins").innerHTML = "00" ;
 document.getElementById("Seconds").innerHTML = "00" ;
 document.getElementById("count").innerHTML = "00" ;
}

function stopwatch()
{
    if(timer==true)
    {
        count = count+1 ; 

        if(count==100)
        {
            sec=sec+1 ;
            count = 0;
        }
        if(sec==60)
        {
            min = min + 1 ;
            sec = 0 ;
        }
        if(min == 60)
        {
            hr = hr+1;
            min = 0 ;
            sec = 0 ; 
        }
        let hourstr = hr ; 
        let minstr = min ; 
        let secstr = sec ; 
        let countstr = count ; 

        if(hourstr<10)
        {
            hourstr = "0" + hourstr ;
        }
        if(minstr<10)
        {
            minstr = "0" + minstr;
        }
        if(secstr<10)
        {
            secstr = "0" + secstr ;
        }
        // if(secstr<10)
        // {
        //     countstr = "0" + countstr ;
        // }
        document.getElementById("hour").innerHTML = hourstr ;
        document.getElementById("Mins").innerHTML = minstr ;
        document.getElementById("Seconds").innerHTML = secstr ;
        document.getElementById("count").innerHTML = countstr ;
        setTimeout("stopwatch()",10)
    }

}
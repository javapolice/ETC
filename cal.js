var today = new Date();
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
var serchYear = null;
var date1 = document.querySelector("#date1");
var date2 = document.querySelector("#date2");
var select = document.querySelector("#button1");
var cal = document.querySelector("#cal");
var title = document.querySelector("#calendar-title");
var tbody= document.querySelector("#cal_tbody");




select.addEventListener("click",function(){
    var firstCal = new Date(date1.value);
    var lastCal = new Date(date2.value);
    var firstYear = firstCal.getFullYear();
    var firstMonth = monthName[firstCal.getMonth()];
    var firstDate = firstCal.getDate();
    title.innerHTML = "<h3>"+firstYear + "년 " + firstMonth + "</h3>";

    if(firstYear%4==0){
        serchYear = leapYear;
    }else{
        serchYear = notLeapYear;
    }
    firstCal.setDate(1);
    
    var str;
    var days_of_month = serchYear[firstCal.getMonth()];

    var tr_start = "<tr>";
    var tr_end = "</tr>";
    var td_blank = "<td></td>";
    var td_start = "<td>";
    var td_end = "</td>";

    str+=tr_start;
    if(firstCal.getDay!=0){
        for(var i = 0; i< firstCal.getDay(); i++){
            str+=td_blank;
        }
    }else{
        str+=td_start+firstCal.getDate()+td_end;
    }

    for(var i=0; i<days_of_month; i++){
            var week_day = firstCal.getDay();
            if(week_day == 0){
                str+=tr_end+tr_start+td_start+firstCal.getDate()+td_end;
            }else{
                str+=td_start+firstCal.getDate()+td_end;    
            }
        
        firstCal.setDate(firstCal.getDate()+1);
    }
    str+=tr_end;
    tbody.innerHTML = str;
});
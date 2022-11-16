var today = new Date();
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayName = ["일","월","화","수","목","금","토"];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
var serchYear = null;
var date1 = document.querySelector("#date1");
var date2 = document.querySelector("#date2");
var select = document.querySelector("#button1");
var cal = document.querySelector("#cal");
var title = document.querySelector("#calendar-title");
var tbody= document.querySelector("#cal_tbody");
var pre = document.querySelector("#pre");
var next = document.querySelector("#next");
var button2 = document.querySelector("#button2");
var tableTbody = document.querySelector("#table_tbody");


pre.addEventListener("click",function(){
    var firstCal = new Date(today);
    var selectCal = new Date(date1.value);
    firstCal.setMonth(today.getMonth()-1);
    if(selectCal>firstCal){
        alert("날짜 조회기간에서 벗어났습니다.");
        return false;
    }else{

        today.setFullYear(firstCal.getFullYear());
        today.setMonth(firstCal.getMonth());
        today.setDate(firstCal.getDate());
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
        var td_start = "<td class='se'>";
        var td_end = "</td>";
        var td_start1 = "<td>";
        var td_startSat = "<td style='color:blue;'>";
        var td_startSun = "<td style='color:red;'>";
        
        str+= tr_start;
        if(firstCal.getDay()==0){
            str+=td_start+firstCal.getDate()+td_end;
            firstCal.setDate(firstCal.getDate()+1);
        }else{
            for(var i = 0; i< firstCal.getDay(); i++){
                str+=td_blank;
            }
            str+=td_start+firstCal.getDate()+td_end;
            firstCal.setDate(firstCal.getDate()+1);
        }
    
        for(var i=1; i<days_of_month; i++){
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
    
    
    
    
            var day = document.querySelectorAll(".se");
             
            for(var i=0; i< day.length; i++){
                day[i].addEventListener("click",function(){
                    var selectD = new Date(today);
                    selectD.setMonth(selectD.getMonth());
                    selectD.setDate(this.innerText);

                    
                    var selectDay = document.querySelector("#select_day");
                    var selectYear = document.querySelector("#select_year");
                    var selectMonth = document.querySelector("#select_month");
                    var selectDate = document.querySelector("#select_date");
                    
                    selectDay.innerHTML = dayName[selectD.getDay()];
                    selectYear.innerHTML = selectD.getFullYear();
                    selectMonth.innerHTML = selectD.getMonth()+1;
                    selectDate.innerHTML = selectD.getDate();

                    button2.addEventListener("click",function(){
                        var str2;
                        while(selectD<=lastCal){
                            str2+=tr_start;
                            str2+=td_start1 + selectD.getFullYear() +"-"+ Number(selectD.getMonth()+1) +"-"+ selectD.getDate() + td_end;
                            if(selectD.getDay()==6){
                                str2+=td_startSat + dayName[selectD.getDay()] + td_end;
                            }else if(selectD.getDay()==0){
                            str2+=td_startSun + dayName[selectD.getDay()] + td_end;
                            }else{
                                str2+=td_start1 + dayName[selectD.getDay()] + td_end;
                            }
                            str2+=td_start1 + td_end;
                            str2+=tr_end;
                            selectD.setDate(selectD.getDate()+1);
                        }
                        tableTbody.innerHTML=str2;
                    });
                });
            }
    }
});


next.addEventListener("click",function(){
    var firstCal = new Date(today);
    var selectCal = new Date(date2.value);
    firstCal.setMonth(today.getMonth()+1);
    if(selectCal<firstCal){
        alert("날짜 조회기간에서 벗어났습니다.");
        return false;
    }else{

        today.setFullYear(firstCal.getFullYear());
        today.setMonth(firstCal.getMonth());
        today.setDate(firstCal.getDate());
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
        var td_start = "<td class='se'>";
        var td_end = "</td>";
        var td_start1 = "<td>";
        var td_startSat = "<td style='color:blue;'>";
        var td_startSun = "<td style='color:red;'>";
    
        str+= tr_start;
        if(firstCal.getDay()==0){
            str+=td_start+firstCal.getDate()+td_end;
            firstCal.setDate(firstCal.getDate()+1);
        }else{
            for(var i = 0; i< firstCal.getDay(); i++){
                str+=td_blank;
            }
            str+=td_start+firstCal.getDate()+td_end;
            firstCal.setDate(firstCal.getDate()+1);
        }
    
        for(var i=1; i<days_of_month; i++){
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
    
    
    
    
            var day = document.querySelectorAll(".se");
             
            for(var i=0; i< day.length; i++){
                day[i].addEventListener("click",function(){
                    var selectD = new Date(today);
                    selectD.setMonth(today.getMonth());
                    selectD.setDate(this.innerText);
    
                    
                    var selectDay = document.querySelector("#select_day");
                    var selectYear = document.querySelector("#select_year");
                    var selectMonth = document.querySelector("#select_month");
                    var selectDate = document.querySelector("#select_date");
                    
                    selectDay.innerHTML = dayName[selectD.getDay()];
                    selectYear.innerHTML = selectD.getFullYear();
                    selectMonth.innerHTML = selectD.getMonth()+1;
                    selectDate.innerHTML = selectD.getDate();

                    button2.addEventListener("click",function(){
                        var str2;
                        while(selectD<=lastCal){
                            str2+=tr_start;
                            str2+=td_start1 + selectD.getFullYear() +"-"+ Number(selectD.getMonth()+1) +"-"+ selectD.getDate() + td_end;
                            if(selectD.getDay()==6){
                                str2+=td_startSat + dayName[selectD.getDay()] + td_end;
                            }else if(selectD.getDay()==0){
                            str2+=td_startSun + dayName[selectD.getDay()] + td_end;
                            }else{
                                str2+=td_start1 + dayName[selectD.getDay()] + td_end;
                            }
                            str2+=td_start1 + td_end;
                            str2+=tr_end;
                            selectD.setDate(selectD.getDate()+1);
                        }
                        tableTbody.innerHTML=str2;
                    });
                });
            }
    }

});

select.addEventListener("click",function(){
    var firstCal = new Date(date1.value);
    today.setFullYear(firstCal.getFullYear());
    today.setMonth(firstCal.getMonth());
    today.setDate(firstCal.getDate());
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
    var td_start = "<td class='se'>";
    var td_end = "</td>";
    var td_start1 = "<td>";
    var td_startSat = "<td style='color:blue;'>";
    var td_startSun = "<td style='color:red;'>";

    str+= tr_start;
    if(firstCal.getDay()==0){
        str+=td_start+firstCal.getDate()+td_end;
        firstCal.setDate(firstCal.getDate()+1);
    }else{
        for(var i = 0; i< firstCal.getDay(); i++){
            str+=td_blank;
        }
        str+=td_start+firstCal.getDate()+td_end;
        firstCal.setDate(firstCal.getDate()+1);
    }

    for(var i=1; i<days_of_month; i++){
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




        var day = document.querySelectorAll(".se");
         
        for(var i=0; i< day.length; i++){
            day[i].addEventListener("click",function(){
                var selectD = new Date(date1.value);
                
                selectD.setDate(this.innerText);

                
                var selectDay = document.querySelector("#select_day");
                var selectYear = document.querySelector("#select_year");
                var selectMonth = document.querySelector("#select_month");
                var selectDate = document.querySelector("#select_date");
                
                selectDay.innerHTML = dayName[selectD.getDay()];
                selectYear.innerHTML = selectD.getFullYear();
                selectMonth.innerHTML = selectD.getMonth()+1;
                selectDate.innerHTML = selectD.getDate();

                button2.addEventListener("click",function(){
                    var str2;
                    while(selectD<=lastCal){
                        str2+=tr_start;
                        str2+=td_start1 + selectD.getFullYear() +"-"+ Number(selectD.getMonth()+1) +"-"+ selectD.getDate() + td_end;
                        if(selectD.getDay()==6){
                            str2+=td_startSat + dayName[selectD.getDay()] + td_end;
                        }else if(selectD.getDay()==0){
                        str2+=td_startSun + dayName[selectD.getDay()] + td_end;
                        }else{
                            str2+=td_start1 + dayName[selectD.getDay()] + td_end;
                        }
                        str2+=td_start1 + td_end;
                        str2+=tr_end;
                        selectD.setDate(selectD.getDate()+1);
                    }
                    tableTbody.innerHTML=str2;
                });
            });
        }


});


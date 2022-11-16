package com.kdm.calender;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class CalenderController {

    @GetMapping("/view")
    public String calenderView(){
        return "calender";
    }

    @GetMapping("view2")
    public String CalenderView2(){
        return "jhj_calendar";
    }
}

package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/v1/emp")
public class EmpController {
	
	@Autowired
	private EmpService empService;
	
	@GetMapping("/screen")
	public String getScreen(Model model) {
		return "screen";
	}
	
	@GetMapping("/structure")
	public @ResponseBody List<EmpVO> getEmpList() {
		return empService.getEmpList();
	}
	
	@GetMapping("emp.do")
	public @ResponseBody List<EmpVO> getEmpDo() {
		return empService.getEmpList();
	}

}

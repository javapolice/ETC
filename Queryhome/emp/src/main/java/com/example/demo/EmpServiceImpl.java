package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImpl implements EmpService {
	
	@Autowired
	private EmpDAO empDAO;

	@Override
	public List<EmpVO> getEmpList() {
		return empDAO.getEmpList();
	}
	
}

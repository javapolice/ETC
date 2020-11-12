package com.example.demo;

import java.util.Date;

import lombok.Data;

@Data
public class EmpVO {
	private int EMP_NO;
	private int UPPER_EMP_NO;
	private String EMP_NAME;
	private String EMP_AGE;
	private String EMP_POSITION;
	private String EMP_MOBILE_NO;
	private String EMP_EMAIL;
	private int EMP_SALARY;
	private String EMP_GENDOR;
	private String EMP_ADDRESS1;
	private String EMP_ADDRESS2;
	private String EMP_ZIP_CODE;
	private Date CREATED_DATE;
	private String CREATED_IP;
	
}

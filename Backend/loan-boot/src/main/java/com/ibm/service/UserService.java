package com.ibm.service;

import java.util.List;

import com.ibm.entity.User;

public interface UserService {
	
	void save(User u);
	List<User> findUser(String name, String password);
	List<User> fetch(String username);
	void update(String name, String address,String nationality, String empId, String aadhaar, String amount);
	List<User> list();
	void updateStatus(String name, String status);
}

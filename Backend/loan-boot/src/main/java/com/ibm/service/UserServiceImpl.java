package com.ibm.service;

import java.util.List;
//import java.util.Optional;

//import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

//import com.ibm.entity.Admin;
import com.ibm.entity.User;
import com.ibm.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository repo;

	@Override
	public void save(User u) {
		// TODO Auto-generated method stub
		repo.save(u);
		return;
	}
	
	@Override
	public List<User> findUser(String name, String password) {
		// TODO Auto-generated method stub
		return repo.findByNameAndPassword(name, password);
	}

	@Override
	public List<User> fetch(String name) {
		// TODO Auto-generated method stub
		return repo.findByName(name);
	}

	@Override
	public void update(String name, String address, String nationality, String empId, String aadhaar, String amount) {
		// TODO Auto-generated method stub
		repo.updateUser(name, address, nationality, empId, aadhaar, amount);
		return;
		
	}

	@Override
	public List<User> list() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public void updateStatus(String name, String status) {
		// TODO Auto-generated method stub
		repo.updateDecision(name,status);
		
	}

	

//	@Override
//	public void update(String name, String address, String nationality, String empId, String aadhaar, String amount) {
//		// TODO Auto-generated method stub
//		repo.updateUser(name, address, nationality, empId, aadhaar, amount);
//		return;
//	}
	
	

	

}

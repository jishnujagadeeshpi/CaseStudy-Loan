package com.ibm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.entity.Admin;
import com.ibm.repo.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository repo;

	@Override
	public List<Admin> findAdmin(String name, String password) {
		// TODO Auto-generated method stub
		return repo.findByNameAndPassword(name,password);
	}

}

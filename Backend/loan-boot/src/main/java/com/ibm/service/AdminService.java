package com.ibm.service;

import java.util.List;

import com.ibm.entity.Admin;

public interface AdminService {

	List<Admin> findAdmin(String name, String password);

}

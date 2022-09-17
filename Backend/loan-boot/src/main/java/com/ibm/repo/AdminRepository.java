package com.ibm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

	List<Admin> findByNameAndPassword(String name, String password);

}

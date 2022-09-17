package com.ibm.repo;

import java.util.List;
//import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ibm.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
	


//	List<User> findByNameAndPassword(String name, String password);

	List<User> findByNameAndPassword(String name, String password);
//	List<User> findByName(String name);
	List<User> findByName(String name);
	
	@Query(value = "update Users set address = :address, nationality = :nationality, emp_id = :empId, aadhaar = :aadhaar, amount = :amount, status = 'applied'  where name = :name", nativeQuery = true)
	@Modifying
	@Transactional
	void updateUser(String name, String address, String nationality, String empId, String aadhaar, String amount);
	
	@Query(value="update Users set status = :status where name = :name",nativeQuery = true)
	@Modifying
	@Transactional
	void updateDecision(String name, String status);
}

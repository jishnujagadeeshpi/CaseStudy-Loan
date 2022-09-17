package com.ibm.rest;



import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.entity.Admin;
import com.ibm.entity.User;
import com.ibm.jwtutilis.TokenManager;
import com.ibm.service.AdminService;
//import com.ibm.rest.UserController.userDetails;
import com.ibm.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	
	TokenManager token = new TokenManager();
	
	@Autowired
	private UserService service;
	
	@Autowired
	private AdminService adservice;
	
	@PostMapping(value="/addUser", consumes="application/json")
	public List<userDetails> addUser(@RequestBody User u) {
		service.save(u);
		List<userDetails> list = new ArrayList<userDetails>();
		userDetails obj = new userDetails();
		var x = token.generateJwtToken(u.getName());
		obj.setAccessToken(x);
		list.add(obj);
		return list;
	}
	
	public class userDetails {
		private String accessToken = "";
		private List<User> userData;
		public String getAccessToken() {
			return accessToken;
		}
		public void setAccessToken(String accessToken) {
			this.accessToken = accessToken;
		}
		public List<User> getUserData() {
			return userData;
		}
		public void setUserData(List<User> userData) {
			this.userData = userData;
		}
		
		
	}
	
	@PostMapping(value = "/checkLogin", consumes="application/json")
	public List<userDetails> checkLogin(@RequestBody User u ) {
		List<userDetails> list = new ArrayList <userDetails> ();
		if(! service.findUser(u.getName(),u.getPassword()).isEmpty()) {
			userDetails obj = new userDetails();
			System.out.println("inside else");
			var x = token.generateJwtToken(u.getName());
			obj.setAccessToken(x);
			obj.setUserData(service.findUser(u.getName(),u.getPassword()));
			list.add(obj);
		}
		return list;
		
	}
	
	@PostMapping(value = "/checkAdmin", consumes="application/json")
	public String checkAdmin(@RequestBody Admin a) {
		System.out.println(a.getName() + a.getPassword());
		if(adservice.findAdmin(a.getName(),a.getPassword()).isEmpty())
			return "false";
		else
			return "true";
	}
	
	@GetMapping(value = "/profile/dashboard", produces="application/json")
	public List<User> getUser(@RequestParam String username) {
		return service.fetch(username);
	}
	
	@PostMapping(value = "/profile/apply/updateUser", consumes="application/json")
	public void userApply(@RequestBody User u) {
		service.update(u.getName(), u.getAddress(), u.getNationality(), u.getEmpId(),u.getAadhaar(),u.getAmount());
		return ;
	}
	
	@PostMapping(value = "/adminPage/decision", consumes="application/json")
	public void approve(@RequestBody User u) {
		System.out.println(u.getName() + u.getStatus());
		service.updateStatus(u.getName(),u.getStatus());
		return;
	}
	
	
	@GetMapping(value="/adminPage",produces="application/json")
	public List<User> getAll(){
		return service.list();
	}
}

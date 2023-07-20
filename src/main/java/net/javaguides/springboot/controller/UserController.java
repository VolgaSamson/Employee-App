package net.javaguides.springboot.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Users;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200")
public class UserController{
	
	@Autowired
	
	private UserRepository userrepository;
	
	@Autowired
	
	private UserService  service;
	
	
	
	@PostMapping("/users/signup")
	public ResponseEntity<Boolean> add(@RequestBody Users users)  {
		if(service.checkuser(users.getEmailid()) == true) {
			return new ResponseEntity<Boolean>(false,HttpStatus.OK);
		}
		else {
			service.save(users);
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}	
	}
	
	@PostMapping("users/login")
	public boolean check(@RequestBody Users users) {
		return service.checklogin(users.getEmailid(), users.getPassword());
		
	}
	
}
package net.javaguides.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.Users;
import net.javaguides.springboot.repository.UserRepository;

@Service

public class UserService{
	
	@Autowired
	
	private UserRepository repo;
	
	
	public boolean checkuser(String emailid) {
		return repo.existsById(emailid);
		
	}
	
	public void save(Users users) {
			repo.save(users);
		}
	public Users get(String emailid) {
		return repo.findById(emailid).get();
	}
	
	
	public boolean checklogin(String emailid, String pass) {
		if (checkuser(emailid)) {
			Users users = get(emailid);
			if(users.getPassword().equals(pass)) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	
}
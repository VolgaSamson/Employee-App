package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="users")

public class Users{
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	
	@Column(name = "emailid")
	
	@Id private String emailid;
	@Column(name = "password")
	private String password;
	@Column(name = "fullname")
	private String fullname;
	@Column(name = "mobileno")
	private int mobileno;
	public Users() {
		
	}
	public Users(String emailid, String password, String fullname, int mobileno) {
		super();
		
		this.emailid = emailid;
		
		this.password = password;
		this.fullname = fullname;
		this.mobileno = mobileno;
	}
	@Id public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public int getMobileno() {
		return mobileno;
	}
	public void setMobileno(int mobileno) {
		this.mobileno = mobileno;
	}
	
	
}
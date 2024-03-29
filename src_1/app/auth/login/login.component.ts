import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    emailid : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  constructor(private usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }
     
  onSubmit() {
    var loginJson = JSON.stringify(this.form.value);
    this.usersService.loginCheck(loginJson)
    .subscribe((data => {
      if(data == true){
        alert("Login successful");
        var jsonData = JSON.parse(loginJson);
        this.storeLogin(jsonData['email']);
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Invalid Login"); 
      }
    }));

   

}
storeLogin(email:any){
  sessionStorage.setItem("email", email); 
}
checkLogin(){
  if (sessionStorage.length != 0){
    this.router.navigate(['/']);
  }
}
}

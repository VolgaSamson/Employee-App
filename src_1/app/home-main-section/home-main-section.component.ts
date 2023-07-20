import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main-section',
  templateUrl: './home-main-section.component.html',
  styleUrls: ['./home-main-section.component.css']
})
export class HomeMainSectionComponent implements OnInit{
  constructor(private router : Router) { }


  datas=[{
    title:"Employee Records",
    imgUrl:"assets/Images/image_1.JPG",
    },
    {
      title:"Advanced Employee Search",
      imgUrl:"assets/Images/image_2.JPG",
  },
  {
    title:"Create Employee Data",
    imgUrl:"assets/Images/image_3.JPG",
    
},
{
  title:"Updating Employee Data",
  imgUrl:"assets/Images/image_4.JPG",
  
}
];

  ngOnInit(): void {
  }

  checkSession(){
    if (sessionStorage.length == 0){
      
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/dashboard'])
    }
  }

}

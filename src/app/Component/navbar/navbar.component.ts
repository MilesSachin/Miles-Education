import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  facultyData(val:any){
    const param : any= {"page":1,"limit":200,"filter":{"status":[1]}};
    if(val == 2){
      this.router.navigate(['faculty/partTime'])
      
    }
    else{
      this.router.navigate(['faculty/fullTime'])
      }
  }
}

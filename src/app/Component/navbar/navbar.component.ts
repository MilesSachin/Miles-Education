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
  redirectTo(val:any){
       let currentUrl = val;
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigate([currentUrl]);
  }
  course(val:any){
    if(val == 2){
      this.router.navigate(['alumini/CMA'])
    }
    else{
      this.router.navigate(['alumini/CPA'])
      }
  }
}

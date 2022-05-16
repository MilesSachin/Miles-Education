import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/DataObserver/faculty.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

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

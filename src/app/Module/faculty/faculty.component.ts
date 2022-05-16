import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FacultyService } from 'src/app/DataObserver/faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculty:any=[{value: 1, name:"Full Time"}, {value:2, name:"Part Time"}];
  spocList:any;
  facultyListDataObserver = this.facultyService.facultyListDataObserver.asObservable();
  myParam: any;
  
  constructor(private facultyService:FacultyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.myParam = params['fullTime'])
    this.fullTimefacultyData()
    this.partTimefacultyData()
  }

  fullTimefacultyData(){
    const param : any= {"page":1,"limit":200,"filter":{"status":[1]}};
    this.facultyService.fullTime(param);
      this.facultyListDataObserver.subscribe((res:any)=>{
        console.log(res)
        this.spocList = res;
      })
  }
  partTimefacultyData(){
    const param : any= {"page":1,"limit":200,"filter":{"status":[1]}};
    this.facultyService.partTime(param);
      this.facultyListDataObserver.subscribe((res:any)=>{
        console.log(res)
        this.spocList = res;
      })
  }
}

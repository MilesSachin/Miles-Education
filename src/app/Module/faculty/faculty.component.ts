import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FacultyService } from 'src/app/DataObserver/faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculty: any = [{ value: 1, name: "Full Time" }, { value: 2, name: "Part Time" }];
  spocList: any;
  facultyListDataObserver = this.facultyService.facultyListDataObserver.asObservable();
  myParam: any;

  constructor(private facultyService: FacultyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.myParam = params['type']);
    // console.log(this.myParam);

    this.facultyData();
  }

  facultyData() {

    const param: any = { "page": 1, "limit": 200, "filter": { "status": [1] } };
    if (this.myParam == 'partTime') {
      this.facultyService.partTime(param);
      this.facultyListDataObserver.subscribe((res: any) => {
        this.spocList = res;
      })
    } else if (this.myParam == 'fullTime') {
      this.facultyService.fullTime(param);
      this.facultyListDataObserver.subscribe((res: any) => {
        this.spocList = res;
      })
    }else{
      console.log('Error 404');
      
    }
  }

}

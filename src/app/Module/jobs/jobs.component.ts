import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobsService } from 'src/app/DataObserver/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  myParam: any;
  spocList: any=[];
  location:any=[];
  company_img='https://cdn.mileseducation.com/MilesEducation-Images/company/logo_image/';
  company: any=[];
  selectedCompany: any;
  selectedLocation: any;
  jobsListDataObserver = this.jobsService.jobsListDataObserver.asObservable();
  locationListDataObserver = this.jobsService.locationListDataObserver.asObservable();
  companyListDataObserver = this.jobsService.companyListDataObserver.asObservable();

  constructor(private route: ActivatedRoute, private jobsService: JobsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.myParam = params['job']);
    this.jobsList();
    this.locationList();
    this.companyList();
  }
  jobsList() {
   var temp = this.selectedCompany?this.selectedCompany:'';
   var temp1 = this.selectedLocation?[this.selectedLocation]:[];
    var param = {
      filter: { 
        qualification: this.myParam, 
        location: temp1, 
        company_name: temp, 
        status_id: [1, 2] 
      },
      limit: 12,
      page: 1
    }
    this.jobsService.jobs(param)
    this.jobsListDataObserver.subscribe((res: any) => {
      this.spocList = res;
      // console.log(res);
    });
  }
  locationList(){
    var param = {course: this.myParam}
    this.jobsService.location(param);
    this.locationListDataObserver.subscribe((res:any)=>{
      this.location = res;
      // console.log(res);
    })
  }
  companyList(){
    var param = {course: this.myParam}
    this.jobsService.company(param);
    this.companyListDataObserver.subscribe((res:any)=>{
      this.company = res;
      // console.log(res);
    })
  }
  
}

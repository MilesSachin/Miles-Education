import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  url:any='https://website-api.mileseducation.com/'

  constructor(private http:HttpClient) { }
  jobs(param:any){
    return this.http.post(this.url+'job/joblist',param);
  }
  location(param:any){
    return this.http.post(this.url+'getJobsCityList',param);
  }
  company(param:any){
    return this.http.post(this.url+'getJobsCompanyList',param);
  }
}

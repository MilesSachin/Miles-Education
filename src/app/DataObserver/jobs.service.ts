import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  url: any = 'https://website-api.mileseducation.com/'
  jobsListDataObserver = new Subject();
  jobsListMetaDataObserver = new Subject();
  locationListDataObserver: any = new Subject();
  companyListDataObserver: any = new Subject();

  constructor(private http: HttpClient) { }
  jobs(param: any) {
    this.http.post(this.url + 'job/joblist', param).subscribe((res: any) => {
      this.jobsListDataObserver.next(res.data)
    });
  }
  location(param: any) {
    this.http.post(this.url + 'getJobsCityList', param).subscribe((res: any) => {
      this.locationListDataObserver.next(res.data)
    });
  }
  company(param: any) {
    this.http.post(this.url + 'getJobsCompanyList', param).subscribe((res: any) => {
      this.companyListDataObserver.next(res.data)
    });
  }

  
}

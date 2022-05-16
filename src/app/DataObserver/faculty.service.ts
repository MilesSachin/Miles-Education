import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  url="https://website-api.mileseducation.com/";
  facultyListDataObserver = new Subject();
  facultyListMetaDataObserver = new Subject();
  constructor(private http:HttpClient) { }

  fullTime(param:any){
    this.http.post(this.url+"getFulltimeAcademicTeamList", param).subscribe((res:any)=>{
      console.log(res)
      this.facultyListDataObserver.next(res.data);
    })
  }
  partTime(param:any){
    this.http.post(this.url+"getParttimeAcademicTeamList", param).subscribe((res:any)=>{
      console.log(res)
      this.facultyListDataObserver.next(res.data);
    })
  }
}

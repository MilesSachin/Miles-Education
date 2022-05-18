import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  url="https://website-api.mileseducation.com/";
  universityListDataObserver: any = new Subject();
  universityListMetaDataObserver: any = new Subject();
  universityListObserver: any= new Subject();
  locationListObserver: any= new Subject();

  constructor(private http:HttpClient) { }


  university(param:any){
    this.http.post(this.url+'getUniversityCourseCardList',param).subscribe((res:any)=>{
      this.universityListDataObserver.next(res.data);
      this.universityListMetaDataObserver.next(res.metadata);
    })
  }
  universityList(param:any){
    console.log(param)
    this.http.post(this.url+'getUniversityCardDropdown', param).subscribe((res:any)=>{
      this.universityListObserver.next(res.data)
      console.log(res.data)
    })
  }
  locationList(param:any){
    console.log('param',param)
    this.http.post(this.url+'getUniversityCityCardDropdown', param).subscribe((res:any)=>{
      console.log(res.data)
      this.locationListObserver.next(res.data);
    })
  }
}

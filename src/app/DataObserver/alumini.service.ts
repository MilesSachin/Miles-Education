import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AluminiService {
  url="https://website-api.mileseducation.com/testimonial/list";

  constructor(private http:HttpClient) { }
  miles(param:any){
    return this.http.post(this.url,param);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluminiService {
  url="https://website-api.mileseducation.com/";

  constructor(private http:HttpClient) { }
  miles(param:any){
    return this.http.post(this.url+'testimonial/list',param);
  }
  
}

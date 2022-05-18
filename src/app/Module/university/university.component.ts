import { Component, OnInit } from '@angular/core';
import { AluminiService } from 'src/app/DataObserver/alumini.service';
import { UniversityService } from './common/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universityListDataObserver = this.universityService.universityListDataObserver.asObservable();
  universityListMetaDataObserver = this.universityService.universityListMetaDataObserver.asObservable();
  universityListObserver = this.universityService.universityListObserver.asObservable();
  locationListObserver = this.universityService.locationListObserver.asObservable();
  universityListCard: any;
  universityMetaListCard: any;
  universityFilter: any;
  locationFilter: any;
  selectedUniversity: any;
  selectedLocation: any;

  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.universityList();
    this.locationListData();
    this.universityListData();
  }

  universityList() {
    var temp = this.selectedUniversity ? [this.selectedUniversity] : [];
    var temp1 = this.selectedLocation ? [this.selectedLocation] : [];
    var param = {
      filter: {
        status: [1],
        city:temp1,
        subject: ["5ebea1814d867adc5062d126", "5fae9050026b97ac05dc3021"],
        uni_id: temp
      },
      limit: 12,
      page: 1
    }
    this.universityService.university(param);
    this.universityListDataObserver.subscribe((res: any) => {
      this.universityListCard = res;
    });
    this.universityListMetaDataObserver.subscribe((res: any) => {
      this.universityMetaListCard = res;
    })
  }
  locationListData() {
    const param:any = {
      uni_subject_id: ["5ebea1814d867adc5062d126", "5fae9050026b97ac05dc3021"]
    }
    this.universityService.locationList(param);
    this.locationListObserver.subscribe((res:any)=>{
      this.locationFilter = res;
    })
  }

  
  universityListData() {
    var param = {
      uni_subject_id: ["5ebea1814d867adc5062d126", "5fae9050026b97ac05dc3021"]
    }
    this.universityService.universityList(param);
    this.universityListObserver.subscribe((res: any) => {
      this.universityFilter = res;
      console.log(res);

    })
  }
}

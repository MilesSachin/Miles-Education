import { isNgTemplate } from '@angular/compiler';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultyService } from 'src/app/DataObserver/faculty.service';
import Swal from 'sweetalert2';
import { FacultyInfoComponent } from '../faculty-info/faculty-info.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  spocList: any;
  faculty: any = [{ value: 1, name: "Full Time" }, { value: 2, name: "Part Time" }];
  facultyListDataObserver = this.facultyService.facultyListDataObserver.asObservable();
  myParam: any;
  item: any;

  constructor(private facultyService: FacultyService, private route: ActivatedRoute, private modalService: NgbModal) { }

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
        console.log(this.spocList);
        
      })
    } else {
      console.log('Error 404');

    }
  }

  openVerticallyCentered(data : any) {
    var spocData: any = {des1:data.designation_line1,des2:data.designation_line2,des3:data.designation_line3,name:data.name}
    const modalRef = this.modalService.open(FacultyInfoComponent, { centered: true });
    modalRef.componentInstance.spocData  = spocData ;
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AluminiService } from 'src/app/DataObserver/alumini.service';
import { AluminiInfoComponent } from '../alumini-info/alumini-info.component';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {
  myParam: any;
  spocList: any;
  photo = 'https://cdn.mileseducation.com/MilesEducation-Images/testimonials/'
  constructor(private route: ActivatedRoute, private aluminiService: AluminiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.myParam = params['course']);
    // this.course();
    this.courseList();
  }

  courseList() {
    var param = {
      filter: {
        course: [this.myParam],
        status: ['1'],
        videoAndNormaltestimonial: 1,
        featured: '1',
      },
      limit: 50,
      page: 1,
    }
    this.aluminiService.miles(param).subscribe((res: any) => {
      this.spocList = res.data;
      console.log(res.data);
    });
  }

  openLg(data: any) {
    var spocData: any = { designation: data.designation,linkedin_url:data.linkedin_url, email:data.email,month:data.batch_month, year:data.batch_date,course:data.course,organization:data.organization, miles_comment: data.miles_comment, testimonial_img: data.testimonial_image, aud: data.aud, bec: data.bec, far: data.far, reg: data.reg, cma1: data.cma1, cma2: data.cma2, name: data.name,middle_name:data.middle_name,last_name:data.last_name }
    const modalRef = this.modalService.open(AluminiInfoComponent, { centered: true,size: 'lg' });
    modalRef.componentInstance.spocData = spocData;
  }
}

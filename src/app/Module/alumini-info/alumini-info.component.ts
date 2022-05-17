import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alumini-info',
  templateUrl: './alumini-info.component.html',
  styleUrls: ['./alumini-info.component.css']
})
export class AluminiInfoComponent implements OnInit {
  photo = 'https://cdn.mileseducation.com/MilesEducation-Images/testimonials/'

  constructor(public activeModal:NgbActiveModal) { }
  @Input() spocData:any;

  ngOnInit(): void {
  }

}

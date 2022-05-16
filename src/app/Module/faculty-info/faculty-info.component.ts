import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './faculty-info.component.html',
  styleUrls: ['./faculty-info.component.css']
})
export class FacultyInfoComponent implements OnInit {
  constructor(public activeModal:NgbActiveModal) { }
  @Input() spocData:any = {};

  ngOnInit(): void {
  }

}

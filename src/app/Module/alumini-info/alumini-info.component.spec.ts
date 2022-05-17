import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiInfoComponent } from './alumini-info.component';

describe('AluminiInfoComponent', () => {
  let component: AluminiInfoComponent;
  let fixture: ComponentFixture<AluminiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

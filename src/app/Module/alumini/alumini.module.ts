import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluminiComponent } from './alumini.component';
import { RouterModule, Routes } from '@angular/router';
import { AluminiInfoComponent } from '../alumini-info/alumini-info.component';
import { UniversityComponent } from '../university/university.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const routes : Routes=[
  {path:':course', component:AluminiComponent},
  {path:'alumini-info', component:AluminiInfoComponent},
  {path:':course/university', component:UniversityComponent}
]

@NgModule({
  declarations: [
    AluminiComponent,
    UniversityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class AluminiModule { }

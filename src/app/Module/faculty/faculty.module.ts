import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FacultyInfoComponent } from '../faculty-info/faculty-info.component';

const routes : Routes=[
  {path:':type', component:FacultyComponent},
  {path:'info', component:FacultyInfoComponent}
]

@NgModule({
  declarations: [
    FacultyComponent,
    FacultyInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class FacultyModule { }

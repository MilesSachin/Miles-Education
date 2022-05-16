import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes=[
  {path:':type', component:FacultyComponent},
]

@NgModule({
  declarations: [
    FacultyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class FacultyModule { }

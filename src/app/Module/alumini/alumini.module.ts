import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluminiComponent } from './alumini.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[
  {path:':course', component:AluminiComponent}
]

@NgModule({
  declarations: [
    AluminiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports:[RouterModule]
})
export class AluminiModule { }

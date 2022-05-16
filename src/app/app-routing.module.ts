import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Component/main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent  },
  {path:'faculty', loadChildren:()=>import('./Module/faculty/faculty.module').then(m=>m.FacultyModule)},
  {path:'alumini', loadChildren:()=>import('./Module/alumini/alumini.module').then(m=>m.AluminiModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

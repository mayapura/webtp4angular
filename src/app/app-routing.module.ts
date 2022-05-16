import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';

const routes: Routes = [
  { path: 'punto1', component:Punto1Component },
  { path: 'punto2', component:Punto2Component },
  { path: 'punto3', component:Punto3Component },
  { path: 'punto3-form/:id', component:Punto3FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

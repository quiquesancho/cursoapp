import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoFormComponent } from './componentes/alumno/alumno-form/alumno-form.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';

const routes: Routes = [
  {
    path: 'alumnos',
    component: AlumnoComponent
  },
  {
    path: 'alumnos/form',
    component: AlumnoFormComponent
  },
  {
    path: 'alumnos/form/:id',
    component: AlumnoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

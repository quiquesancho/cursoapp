import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/modelo/alumno';
import { ErrorValidacionServidor } from 'src/app/modelo/error-validacion-servidor';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css'],
})
export class AlumnoFormComponent implements OnInit {
  titulo: string = 'FORMULARIO ALUMNO';
  alumno: Alumno;

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.alumno = new Alumno();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.alumnoService.getAlumno(parseInt(id)).subscribe(
          (httpResponse) => {
            this.alumno = httpResponse.body as Alumno;
          },
          (err) => console.error(err)
        );
      }
    });
  }

  add(a: Alumno) {
    this.alumnoService.addAlumno(a).subscribe(
      (response) => {
        alert(
          `Alumno ${response.nombre} ${response.apellido} ha sido añadido correctamente`
        );
        this.router.navigateByUrl('/alumnos');
      },
      (err) => {
        if (err.status == 400) {
          let listaErrores: ErrorValidacionServidor[] = err.error;

          listaErrores.forEach((e) => {
            console.log(e.field + ' ' + e.defaultMessage + ' ' + e.objectName);
          });
        }
      }
    );
  }

  update() {
    this.alumnoService.updateAlumno(this.alumno).subscribe(
      (response) => {
        alert(
          `Alumno ${response.nombre} ${response.apellido} ha sido añadido correctamente`
        );
        this.router.navigateByUrl('/alumnos');
      },
      (err) => console.error(err)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  listaAlumnos: Alumno[];
  titulo: string = 'LISTADO DE ALUMNOS';
  automatico: boolean;
  intervalId: any;

  constructor(private alumnosService: AlumnosService) {
    this.listaAlumnos = [];
    this.automatico = false;
  }

  ngOnInit(): void {
    // this.alumnosService.getAlumnos().subscribe((a) => {
    //   this.listaAlumnos = a;
    // });

    this.loadListaAlumnos();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  checked() {
    this.automatico = !this.automatico;

    if (this.automatico) {
      this.programarUpdateAuto();
    } else {
      this.desprogramarUpdateAuto();
    }
  }

  loadListaAlumnos() {
    this.alumnosService.getAlumnos().subscribe((httpResponse) => {
      this.listaAlumnos = <Alumno[]>httpResponse.body;
      // console.log(httpResponse.status);
    });

    this.alumnosService.getAlumnosJson().subscribe(
      response => {
        let alumno = response as Alumno;
        // console.log(alumno)
      },
      err => console.error(err)
    );
  }

  programarUpdateAuto() {
    this.intervalId = setInterval(() => {
      this.loadListaAlumnos();
    }, 3000);
  }

  desprogramarUpdateAuto() {
    clearInterval(this.intervalId);
  }

  deleteAlumno(id: number) {
    let option = confirm('Estás seguro que quieres eliminar a este alumno?');
    if (option) {
      this.alumnosService.deleteAlumno(id).subscribe(
        () => {
          alert('Alumno eliminado con éxito');
          // this.loadListaAlumnos();
          this.listaAlumnos = this.listaAlumnos.filter((a) => a.id != id);
        },
        (err) => console.error(err)
      );
    }
  }
}

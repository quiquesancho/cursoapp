import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelo/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  URI: string = 'http://localhost:8080';
  cabeceras : HttpHeaders = new HttpHeaders({'Content-type' : 'application/json'})

  constructor(private httpClient: HttpClient) {}

  // public getAlumnos(): Observable<Alumno[]> {
  //   return this.httpClient.get<Alumno[]>(this.URI);
  // }

  public getAlumnos(): Observable<HttpResponse<Alumno[]>> {
    return this.httpClient.get<Alumno[]>(this.URI, { observe: 'response' });
  }

  public getAlumno(id: number) : Observable<HttpResponse<Alumno>>{
    return this.httpClient.get<Alumno>(`${this.URI}/${id}`,{ observe: 'response' });
  }

  public addAlumno(alumno : Alumno) : Observable<Alumno> {
    return this.httpClient.post<Alumno>(this.URI, alumno, { headers: this.cabeceras });
  }

  public deleteAlumno(id : number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.URI}/${id}`);
  }

  public updateAlumno(alumno : Alumno) : Observable<Alumno> {
    return this.httpClient.put<Alumno>(`${this.URI}/${alumno.id}`, alumno, {headers : this.cabeceras})
  }

  public getAlumnosJson () : Observable<Alumno>{
    return this.httpClient.jsonp<Alumno>(`${this.URI}/jsonp/alumno`, 'callback=JSONP_CALLBACK');
  }
}

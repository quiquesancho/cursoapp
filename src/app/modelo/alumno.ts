export class Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
  created_at: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.edad = 0;
    this.created_at = '';
  }

  public toString(): string {
    return `${this.id} ${this.nombre} ${this.apellido} ${this.edad} ${this.email} ${this.created_at}`;
  }
}

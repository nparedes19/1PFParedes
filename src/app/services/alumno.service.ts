import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos: Alumno[] =[
    {id:1, nombre: 'Natalia', apellido:'Paredes', edad: 28, email: 'natalia_paredes13@hotmail.com', curso:'Angular'},
    {id:2, nombre: 'Alejandra', apellido:'Castrillón',  edad: 26, email: 'aleja.castri@hotmail.com', curso:'Diseño UX/UI'},
    {id:3, nombre: 'Juan David', apellido:'Sanchez', edad: 29, email: 'juan_david@gmail.com', curso:'Diseño UX/UI'},
    {id:4, nombre: 'Santiago',apellido:'Carvajal', edad: 27, email: 'santi_ca@gmail.com', curso:'React JS'}
  ];
  
  constructor() { }

  obtenerAlumnos(){
    return this.alumnos;
  }

  eliminarAlumno(id: number){
    let alumno = this.alumnos
    for(let i=0; i<alumno.length; i++){
      if(this.alumnos[i].id==id){
        this.alumnos.splice(i,1)
      }
    }
    return this.alumnos
  }

  submit(alumno: Alumno){
    this.alumnos.push(alumno);
    return this.alumnos;
  }

  modificar(newForm:any){
    let index = this.alumnos.findIndex(i=>i.id===newForm.id)
    this.alumnos[index]=newForm
  }
}

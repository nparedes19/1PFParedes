import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})


export class AlumnosComponent implements OnInit {
  @ViewChild('tabla') table?:  MatTable<any>;
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'email', 'curso', 'acciones'];
  alumnos: Alumno[] =[]
  formularioContacto: FormGroup = new FormGroup({
    id: new FormControl ('',[Validators.required]),
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    apellido: new FormControl ('', [Validators.required]),
    edad: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required,Validators.email]),
    curso: new FormControl ('',[Validators.required]),
  })

  formularioEditar: FormGroup = new FormGroup({
    id: new FormControl ('',[Validators.required]),
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    apellido: new FormControl ('', [Validators.required]),
    edad: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required,Validators.email]),
    curso: new FormControl ('',[Validators.required]),
  })

  constructor(private alumnoService: AlumnoService){
    this.alumnos=this.alumnoService.obtenerAlumnos();
    console.log(this.alumnos)
  }

  

  submit(){
    let alumno = this.formularioContacto.value
    this.alumnos=this.alumnoService.submit(alumno)
    console.log(this.alumnos)
    this.table?.renderRows()
  }

  elimninarAlumno(id: number){
    this.alumnos=this.alumnoService.eliminarAlumno(id)
    console.log(this.alumnos)
    this.table?.renderRows()
  }
  
  actualizar(){
    this.alumnoService.modificar(this.formularioEditar.value)
    this.table?.renderRows()
  }

  ngOnInit(): void {
  }
}

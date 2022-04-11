import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from './models/alumno';
import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlumnoService]
})
export class AppComponent {
  title = 'PFParedes';
  
}

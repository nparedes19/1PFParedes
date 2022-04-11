import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlumnoService } from './services/alumno.service';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NombrePipe } from './pipes/nombre.pipe';
import { LetraDirective } from './directives/letra.directive';



@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    NombrePipe,
    LetraDirective
  

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

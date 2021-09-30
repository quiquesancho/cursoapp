import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { LayoutModule } from './layout/layout.module';
import { AlumnoFormComponent } from './componentes/alumno/alumno-form/alumno-form.component';
import { FormsModule } from '@angular/forms';
import { MiInterceptorService } from './servicios/mi-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MiInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

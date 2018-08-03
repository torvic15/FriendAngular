import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonComponent } from './person/person.component';

import { PostComponent } from './post/post.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    PersonComponent,
    
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

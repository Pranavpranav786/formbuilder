import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistComponent } from './artist/artist.component';
import { Artist2Component } from './artistcomponent/artist2.component';
import { MassComponent } from './mass/mass.component';

@NgModule({
  declarations: [
    AppComponent,
      ArtistComponent,
      Artist2Component,
      MassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

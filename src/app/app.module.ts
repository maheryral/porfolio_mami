import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompetenceComponent } from './competence/competence.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjetComponent } from './projet/projet.component';
import { ImageproComponent } from './imagepro/imagepro.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetenceComponent,
    ContactsComponent,
    ProjetComponent,
    ImageproComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

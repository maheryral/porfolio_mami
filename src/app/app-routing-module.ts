import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetenceComponent } from './competence/competence.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', component: CompetenceComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'projet', component: ProjetComponent },
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

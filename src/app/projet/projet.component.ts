import { Component } from '@angular/core';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
 constructor(private projetvue:ProjetService){

 }
 imagevue(){
  this.projetvue.setobjetvue(true)
 }
}

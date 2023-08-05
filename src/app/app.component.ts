import { Component, OnInit} from '@angular/core';
import { ProjetService } from './services/projet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isactive:boolean=false;
  isactive2:boolean=false;
   projetvue:boolean=false;

   constructor(private projetservice:ProjetService){}
   ngOnInit(): void {
       this.projetservice.projetvue$.subscribe((value)=> {
        this.projetvue=value
       })
   }
 
  activestyles(){
    this.isactive=true;
  }
  activestyles2(){
    this.isactive2=true;
  }
}

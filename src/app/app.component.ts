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
   affichage: string= '';
   
  description: string ="Je suis un graphiste et vidéaste à la recherche d'un emploi de graphiste ou de vidéaste. J'ai une expérience d'un an en tant que vidéaste et graphiste en tant que freelance."
   constructor(private projetservice:ProjetService){}
   ngOnInit() {
       this.projetservice.projetvue$.subscribe((value)=> {
        this.projetvue=value
       })
       this.affichagesyllabe(this.description);

   }
 async affichagesyllabe(description:string){
    const styllabe = description.split('');
   
    for (const syllable of styllabe){
      this.affichage +=syllable +'';
      await this.delay(70) ;
    }
  }
  delay(ms:number){
    return new Promise(resolve=> setTimeout(resolve,ms));
  }
  activestyles(){
    this.isactive=true;
  }
  activestyles2(){
    this.isactive2=true;
  }
 


}

import { Component, ElementRef,Renderer2,HostListener } from '@angular/core';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
 constructor(private projetvue:ProjetService,private el:ElementRef,private renderer:Renderer2){

 }
 imagevue(image:string,imglegende:string){
  this.projetvue.setobjetvue(true,image,imglegende)
 }
 isprojetactive=false;

 @HostListener('window:scroll',['$event'])
 checkscroll(){
   const elemenetposition= this.el.nativeElement.offsetTop;
   const scrollposition= window.pageYOffset + window.innerHeight;

   if(scrollposition > elemenetposition && !this.isprojetactive){
       this.isprojetactive=true;
   }
   else if(scrollposition <= elemenetposition && this.isprojetactive){
     this.isprojetactive=false;
   }
 }
}

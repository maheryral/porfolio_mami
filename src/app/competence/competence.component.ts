import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {
    iscomptetenceactive=false;
    constructor(private el:ElementRef,private renderer:Renderer2){}
    @HostListener('window:scroll',['$event'])
    checkscroll(){
      const elemenetposition= this.el.nativeElement.offsetTop;
      const scrollposition= window.pageYOffset + window.innerHeight;

      if(scrollposition > elemenetposition && !this.iscomptetenceactive){
          this.iscomptetenceactive=true;
      }
      else if(scrollposition <= elemenetposition && this.iscomptetenceactive){
        this.iscomptetenceactive=false;
      }
    }
}

import { Component,ElementRef,Renderer2,HostListener } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  isprojetactive=false;
  constructor(private el:ElementRef,private renderer:Renderer2){

  }
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

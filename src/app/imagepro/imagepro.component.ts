import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';


@Component({
  selector: 'app-imagepro',
  templateUrl: './imagepro.component.html',
  styleUrls: ['./imagepro.component.css']
})
export class ImageproComponent implements OnInit {
   imageprovue:boolean=false
   imageaffiche:string=''
   imagelegende:string=''
  constructor(private imageservice: ProjetService){}
  imagenotvue(){
    this.imageservice.setobjetvue(false,'','')
   }
 ngOnInit(): void {
     this.imageservice.projetvue$.subscribe((value)=>{
       this.imageprovue=value;
     })
     this.imageservice.imagevue$.subscribe((img)=>{
      this.imageaffiche=img
     })
     this.imageservice.imagelegende$.subscribe((imgleg)=>{
      this.imagelegende=imgleg
     })
 }
 

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private _projetvue=new BehaviorSubject<boolean>(false);
  private _imgvue=new BehaviorSubject<string>('');
  private _imglengende=new BehaviorSubject<string>('');
  projetvue$=this._projetvue.asObservable();
  imagevue$=this._imgvue.asObservable();
  imagelegende$=this._imglengende.asObservable();
  
  setobjetvue(value:boolean,img:string,imgleg:string){
    this._projetvue.next(value);
    this._imgvue.next(img);
    this._imglengende.next(imgleg)
  }
  
}

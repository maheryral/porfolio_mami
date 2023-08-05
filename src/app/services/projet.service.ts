import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private _projetvue=new BehaviorSubject<boolean>(false);
  projetvue$=this._projetvue.asObservable();
  
  setobjetvue(value:boolean){
    this._projetvue.next(value)
  }
  
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isactive:boolean=false;
  isactive2:boolean=false;
 
 
  activestyles(){
    this.isactive=true;
  }
  activestyles2(){
    this.isactive2=true;
  }
}

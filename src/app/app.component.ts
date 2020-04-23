import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projetTp';
  hello = 'Bonjour';
  meteo = "";
 

ChangeMeteo(Meteo){
  this.meteo = Meteo;
}

// ------------ 
bgColor = 'red';
writevar: string = "";


changeColor(){
  if(this.bgColor == 'red'){
    this.bgColor = 'blue';
  }else{
    this.bgColor = 'red';
  } 
}


}

import { Component, OnInit,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent {

  @Output() sendMeteoParent = new EventEmitter();


    meteoP = "Soleil";
    meteoA = "Pluie";


  // sendMeteo(){
  //   if(this.Ville == "PARIS"){
  //     this.sendMeteoParent.emit(this.meteoP); 
  //   }else{
  //     this.sendMeteoParent.emit(this.meteoA); 
  //   }

   sendMeteo(event){
     if(event.srcElement.name == "PARIS"){
      this.sendMeteoParent.emit("Soleil");
    }else{
      this.sendMeteoParent.emit("Pluie");
    }
  }
 


}

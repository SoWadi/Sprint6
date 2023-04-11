import { Component, Input, OnInit } from '@angular/core';
import Frases from "src/app/_files/fraseEscena.json"

//import testSprint from "appS/src/app/_files/testSprint.json"


interface FRASES {

  frase: String;
  imgString : String;

}

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
/* export class EscenaComponent {
escena = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"
}
 */

/* export class EscenaComponent {
  //public frasesList:string[] = frases;
  //@Input () frasesList:string = frases;
  //public frasesList:{frase: string; }[] = frases;
  @Input () frasesList = Frases;

} */


export class EscenaComponent implements OnInit {
  @Input () frasesList = Frases;
  
  currentPosition :number = 0;
  isAvailable = false;

  /*   public frasesList:{ id: number; frase: string; }[] = frasesTest;
  //@Input() item = ''; // decorate the property with @Input()
  //@Input() item2 = ""; // decorate the property with @Input()
  //currentItem2 = this.frasesList;*/


  positionImg:number = this.currentPosition;
  imgString :string = "./assets/" + this.currentPosition + ".jpg";
  Frases: FRASES[] = this.frasesList;


  constructor(){}
 
// +++++++++ APRES +++++++++
  previous() {
    if (this.currentPosition > 0) {
      this.currentPosition --;
      this.positionImg--;

    }

    console.log('currentPosition: ', this.currentPosition, ' || TESSSSST!: ', this.frasesList[this.currentPosition]);
    this.imgString = "./assets/"+ this.positionImg +".jpg"

  }
  next() { 
    if (this.currentPosition < this.frasesList.length-1) {
      //console.log(this.frasesList.length-1);
      this.currentPosition ++;
      this.positionImg++;
    }
    this.imgString = "./assets/"+ this.positionImg +".jpg"

    this.frasesList.length
    console.log('currentPosition: ', this.currentPosition, ' || TESSSSST!: ', this.frasesList[this.currentPosition]);
  }

  changeActiveStatus() {
    this.isAvailable = !this.isAvailable
    console.log(this.isAvailable);

    if (this.positionImg <= 0){
    this.positionImg++}
    this.imgString = "./assets/"+ this.positionImg +".jpg"
  }
  ngOnInit(): void {
    console.log(this.frasesList);

  }


      // +++++++++ AVANT +++++++++
/*     previous() {
      if (this.currentPosition > 0){
      console.log(this.currentPosition !== 0);
      this.currentPosition --;
      console.log('currentPosition: ', this.currentPosition, ' || TESSSSST!: ', this.frasesList[this.currentPosition]);}
    }
    next() { 
      if(this.currentPosition !== this.frasesList.length-1){
      //console.log(this.frasesList.length-1);
      this.currentPosition ++;
      console.log('currentPosition: ', this.currentPosition, ' || TESSSSST!: ', this.frasesList[this.currentPosition]);
}
    }
    ngOnInit(): void {
      console.log(this.frasesList);

    } */
  }
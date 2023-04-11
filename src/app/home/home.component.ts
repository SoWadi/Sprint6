import { Component, OnInit } from '@angular/core';
import Frases from "/src/app/_files/fraseEscena.json";

export interface FRASES {

  id: Number;
  frase: String;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  public frasesList = Frases;

  Frases: FRASES[] = this.frasesList;

  ngOnInit(){
console.log(this.frasesList);
  }
}

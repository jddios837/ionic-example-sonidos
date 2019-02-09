import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Animal } from "../../intefaces/animal.interface";
import { ANIMALES } from "../../data/data.animales";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];

  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.splice(0);
  }

  reproducir(animal: Animal) {
    console.log('Animal ', animal);

    let audio = new Audio();
    audio.src = animal.audio;

    audio.load();
    audio.play();

    animal.reproduciendo = true;

    setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000);
  }
}

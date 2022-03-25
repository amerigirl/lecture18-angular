import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.css']
})
export class PetDashboardComponent implements OnInit {
  showDogs: boolean;

  dogs: string[];
  cats: string[];
  constructor() {
    this.showDogs = false;
    this.dogs = ["Stark", "Bella", "Zeus", "Zoey", "Fable"]
    this.cats = ["Winston", "Stella", "Dexter", "Api"]

  }


  ngOnInit() {
  }

  addPet(myPetName) {
    if (this.showDogs === true) {
      this.dogs.push(myPetName);

    } else {
      this.cats.push(myPetName);
    }
  }

  togglePetType(showDogs) {
    this.showDogs = showDogs;
  }

}

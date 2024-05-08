import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  random_text = faker.lorem.sentence({min:3, max:5});
  entredText = '';


  onInput(event:any){
    this.entredText = event.target.value;
  }


}

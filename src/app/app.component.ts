import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023
  };

  onNameChange(event:any){
    this.name = event.target.value;
  }

  onDateChange(event:any){
    this.date = event.target.value;
  }

  onAmountChange(even:any){
    this.amount = parseFloat(even.target.value);
  }

  onHeightChange(event:any){
    this.height = event.target.value;
  }

  onMileChange(event:any){
    this.miles = event.target.value;
  }


}

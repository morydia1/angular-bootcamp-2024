import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nature',
      content: 'I saw this neat today'
    },
    {
      title: 'Mory Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Mory',
      content: 'I saw you biking today'
    },
    {
      title: 'Mory Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Mory',
      content: 'I saw you biking today'
    }
  ]  

}

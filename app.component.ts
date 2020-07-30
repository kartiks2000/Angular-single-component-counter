import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  inc = () => {
    this.counter = this.counter + 1;
  }

  dec = () => {
    this.counter = this.counter - 1;
  }
}

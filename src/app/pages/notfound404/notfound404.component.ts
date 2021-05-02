import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound404',
  templateUrl: './notfound404.component.html',
  styleUrls: ['./notfound404.component.scss'],
})
export class Notfound404Component {
  constructor() {}

  // Defining actual year
  actualYear = new Date().getFullYear();
}

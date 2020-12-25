import { Component } from '@angular/core';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  builds = [
    {name: "Joe's build 1"},
    {name: "Joe's build 2"},
    {name: "Joe's build 3"},
  ]
}

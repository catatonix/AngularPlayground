import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <p>
      buttons works!
    </p>
    <button mat-button (click)="turnOff()">
    <mat-icon>face</mat-icon>
    Click me!</button>
    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

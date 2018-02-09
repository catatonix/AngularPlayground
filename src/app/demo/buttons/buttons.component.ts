import { Component, OnInit } from '@angular/core';
import Spark from '../../data/Spark';

@Component({
  selector: 'app-buttons',
  template: `
    <p>
      buttons works!
    </p>
    <button mat-button (click)="turnOff()">
    <mat-icon>face</mat-icon>
    Click me!
    </button>
    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor(private spark: Spark) {
    this.turnOn();
  }

  turnOff(){
    this.spark.write('test', 'off');
  }
  turnOn(){
    this.spark.write('test', 'on');
  }

  ngOnInit() {
  }

}

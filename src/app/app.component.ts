import { Component } from '@angular/core';
import Spark from './data/Spark';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private spark: Spark) {
    this.turnOn();
  }

  turnOff(){
    this.spark.write('test', 'off');
  }
  turnOn(){
    this.spark.write('test', 'on');
  }



}

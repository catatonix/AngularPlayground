import { Component } from '@angular/core';
import Spark from './data/Spark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private spark: Spark) {
    spark.write('/', '-');
    spark.read('/').then(e => {
      console.log(e);
    });
  }
}

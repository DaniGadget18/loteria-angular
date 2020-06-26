import { Component } from '@angular/core';
import {socketLoteriaService} from "./services/socketLoteria.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loteria-sockets';


  constructor( private socketloteria:socketLoteriaService ) {
    this.socketloteria.setupSocketConnection()
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "angelo";
  nombreUpper: string = "ANGELO";
  nombreCompleto: string = "aNgelO gOnZaleZ";

  fecha: Date = new Date();

}

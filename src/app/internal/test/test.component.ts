import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  totalPreguntas: number = 0;
  preguntasContestadas: number = 0;
  resultado: number = 0;
  resta:number = 0;
  constructor() { }


  restarPreguntas(an: any) {
    if(an === 3){
      this.resta = 0.33;
    }else if(an === 4) {
      this.resta = 0.25;
    }
  }

  calcularResultado() {
    for(let i = 0; i < this.totalPreguntas; i++) {
      const resta = i + i*this.resta;
      const restado = this.totalPreguntas - resta;
      if(restado > (this.totalPreguntas/2)){
        this.resultado = i;
      }

    }

  }
  resetForm() {
    this.totalPreguntas = 0;
    this.preguntasContestadas = 0;
    this.resultado = 0;
    this.resta = 0;
  }
}

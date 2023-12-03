import { Component } from '@angular/core';

@Component({
  selector: 'app-minimo',
  templateUrl: './minimo.component.html',
  styleUrls: ['./minimo.component.css']
})
export class MinimoComponent {
  totalPreguntas: number = 0;
   totalPreguntasContestadas: number = 0;
  totalPreguntasMal:number = 0;
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
    const resta = this.totalPreguntasMal*(1+this.resta);
    console.log(resta)
    console.log(this.totalPreguntasContestadas)
    console.log(this.totalPreguntas)
    this.resultado = (((this.totalPreguntasContestadas - resta)/this.totalPreguntas))*10;
    console.log(this.resultado)
  }
  resetForm() {
    this.totalPreguntas = 0;
    this.totalPreguntasContestadas = 0;
    this.resultado = 0;
    this.resta = 0;
  }
}

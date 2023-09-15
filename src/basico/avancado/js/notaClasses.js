const nota1 = document.getElementsByName('n1');
const nota2 = document.getElementsByName('n2');
const nota3 = document.getElementsByName('n3');
const nota4 = document.getElementsByName('n3');

class Nota {
    constructor(bimestre, nota){
        this.bimestre = bimestre;
        this.nota = nota;
    }

    bimestre1(){
        this.nota = 10;
        console.log(this.bimestre + this.nota)
    }

    bimestre2(){
        this.nota = 9;
        console.log(this.bimestre + nota2)
    }

    bimestre3(){
        this.nota = 2;
        console.log(this.bimestre + nota3)
    }

    bimestre4(){
        this.nota = 4;
        console.log(this.bimestre + nota4)
    }
}

const resultadoNota = new Nota('Sua nota no bimestre é: ');

console.log(resultadoNota.bimestre1())
console.log(resultadoNota.bimestre2())
console.log(resultadoNota.bimestre3())
console.log(resultadoNota.bimestre4())
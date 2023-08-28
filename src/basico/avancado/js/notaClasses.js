const nota1 = document.getElementsByName('n1');
const nota2 = document.getElementsByName('n2');
const nota3 = document.getElementsByName('n3');
const nota4 = document.getElementsByName('n3');

class Nota {
    constructor(bimestre){
        this.bimestre = bimestre
    }

    bimestre1(){
        console.log(this.bimestre + nota1)
    }

    bimestre2(){
        console.log(this.bimestre + nota2)
    }

    bimestre3(){
        console.log(this.bimestre + nota3)
    }

    bimestre4(){
        console.log(this.bimestre + nota4)
    }
}

const resultadoNota = new Nota('Sua nota no ')

console.log(resultadoNota.bimestre1())
console.log(resultadoNota.bimestre2())
console.log(resultadoNota.bimestre3())
console.log(resultadoNota.bimestre4())
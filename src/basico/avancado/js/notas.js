const calcularMedia = (notas) => {
		
    let soma = 0;

    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media
}

const aprovacao = (notas) => {
    let media = calcularMedia(notas);

    let totalMedia = media

    if (condicao = media < 5) {
        document.getElementById("resultado").style.color = "#FC0303"
        return 'Média: ' + totalMedia + ' - Resultado: Reprovado'
    }
    else if (condicao = media >= 5 && media <= 6.9){
        document.getElementById("resultado").style.color = "#FCF003"
        return 'Média: ' + totalMedia + ' - Resultado: Dependencia'
    }
    else {
        document.getElementById("resultado").style.color = "#56FC03"
        return 'Média: ' + totalMedia + ' - Resultado: Aprovado'
    }
}

/* Formulário de envio de dados para o cálculo da média */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    const error = document.querySelectorAll('input')

    for (const errors of error) {
        if (errors.matches('.erro')) {
            return false;
        }
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)) {
            notas.push(numero);
        }
    }

    let texto = aprovacao(notas);    

    document.getElementById('resultado').innerHTML = texto;
});
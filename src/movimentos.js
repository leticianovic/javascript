class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.saldo
        })

        return valorAtualizado
    }
}

const m01 = new Movimentacao('Nubank', 'salario', 5000)
const m02 = new Movimentacao('Nubank', 'bonificação', 800)
const m03 = new Movimentacao('Nubank', 'imposto', -1000)
const m04 = new Movimentacao('Nubank', 'contas', -3000)

const reg01 = new Registro(1,8,2023)
reg01.novaMovimentacao(m01, m02, m03, m04)

console.log('O saldo dos registros foi de: ' + reg01.resumo())
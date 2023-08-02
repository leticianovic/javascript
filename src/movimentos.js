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
        let tipo = ''

        const regexB = new RegExp('bradesco', 'i') //Expressões regulares
        const regexN = new RegExp('nubank', 'i')

        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(regexB, 'Nubank')
            if(lancamento.banco.match(regexN)){
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
            
        })

        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Nubank', 'salario', 5000)
const m02 = new Movimentacao('Bradesco', 'bonificação', 800)
const m03 = new Movimentacao('Nubank', 'imposto', -1000)
const m04 = new Movimentacao('Itau', 'contas', -3000)
const m05 = new Movimentacao('Bradesco', 'imposto', -400)
const m06 = new Movimentacao('Bradesco', 'salario', 8000)
const m07 = new Movimentacao('Nubank', 'reembolso', 3000)

const reg01 = new Registro(1,8,2023)
reg01.novaMovimentacao(m01, m02, m03, m04, m05, m06, m07)
console.log('O saldo dos registros ' + reg01.resumo())

const movimentacoesGerais = [m01, m02, m03, m04, m05, m06, m07]

movimentacoesGerais.map(elemento =>
    console.log(elemento.banco.length)
)
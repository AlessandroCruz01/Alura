import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQtd = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao()
        console.log(negociacao)
        this.limparFormulario()

    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','))
        const qtd = parseInt(this.inputQtd.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date, qtd, valor )
    }

    limparFormulario():void {
        this.inputData.value='';
        this.inputQtd.value='';
        this.inputValor.value='';

        this.inputData.focus()

    }

}
export class Negociacao {
    #data;
    #qtd;
    #valor;

    constructor(data, qtd, valor){
        this.#data = data;
        this.#qtd = qtd;
        this.#valor = valor;
    }
}
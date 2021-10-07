export class Negociacao {
    #data;
    #qtd;
    #valor;

    constructor(data, qtd, valor){
        this.#data = data;
        this.#qtd = qtd;
        this.#valor = valor;
    }

    get data(){
        return this.#data
    }

    get qtd(){
        return this.#qtd
    }

    get valor(){
        return this.#valor
    }

    get volume(){return this.#qtd * this.#valor}
}
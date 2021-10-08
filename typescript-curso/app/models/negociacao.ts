export class Negociacao {
    private _data;
    private _qtd;
    private _valor;

    constructor(data, qtd, valor){
        this._data = data;
        this._qtd = qtd;
        this._valor = valor;
    }

    get data(){
        return this._data
    }

    get qtd(){
        return this._qtd
    }

    get valor(){
        return this._valor
    }

    get volume(){return this._qtd * this._valor}
}
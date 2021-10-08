export class Negociacao {
    private _data: Date;
    private _qtd: number;
    private _valor: number;

    constructor(data: Date, qtd: number, valor: number){
        this._data = data;
        this._qtd = qtd;
        this._valor = valor;
    }

    get data(): Date{
        return this._data
    }

    get qtd(): number{
        return this._qtd
    }

    get valor(): number{
        return this._valor
    }

    get volume(): number{return this._qtd * this._valor}
}
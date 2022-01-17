import { Cliente } from "./Cliente.js";

export class ContaCorrete{
    agencia;
    _saldo = 0;
    _cliente;

    set cliente(novocliente){
        if (novocliente instanceof Cliente)
            this._cliente = novocliente;    
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    depositar(valor){
        if (valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor){
        if (this._saldo < valor) return;
        this._saldo -= valor;
    }

    transferir(valor, conta){
        const valorsacado = this.sacar(valor);
        conta.depositar(valor);
        conta.cidade = "São Paulo";
        valor = 20;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }
}
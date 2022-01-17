export class ContaCorrete{
    agencia;
    _saldo = 0;
    cliente;

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
    }
}
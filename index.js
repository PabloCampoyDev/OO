class Cliente {
    nome;
    cpf;
}

class ContaCorrete{
    agencia;
    _saldo = 0;

    depositar(valor){
        if (valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor){
        if (this._saldo < valor) return;
        this._saldo -= valor;
    }
}

const contacorrentePablo = new ContaCorrete(); 
contacorrentePablo.agencia = 1001;
contacorrentePablo.depositar(100);
let sacado = contacorrentePablo.sacar(50);

console.log(contacorrentePablo);
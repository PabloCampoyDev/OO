class Cliente {
    nome;
    cpf;
}

class ContaCorrete{
    agencia;
    saldo = 0.00;
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const contacorrentePablo = new ContaCorrete(); 
contacorrentePablo.agencia = 1001;
console.log(contacorrentePablo.saldo);
contacorrentePablo.saldo = 100;
console.log(contacorrentePablo.saldo);
let sacado = 50;
contacorrentePablo.sacar(sacado);
console.log(contacorrentePablo.saldo);

const client1 = new Cliente();
client1.nome = "Pablo";
client1.cpf = "403.995.568-42";

const client2 = new Cliente();
client2.nome = "Enilson";
client2.cpf = "425.995.568-42";

console.log(client1)
console.log(client2);
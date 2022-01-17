class Cliente {
    nome;
    cpf;
    agencia;
    saldo = "0.00";
}

const client1 = new Cliente();
const client2 = new Cliente();

client1.nome = "Pablo";
client1.cpf = "403.995.568-42";
client1.agencia = 0425;
client1.saldo = 250.35;

client2.nome = "Enilson";
client2.cpf = "425.995.568-42";
client2.agencia = 123;

console.error(client1, client2);
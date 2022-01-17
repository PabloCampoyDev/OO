import { Cliente } from "./Cliente.js";
import { ContaCorrete } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Pablo";
cliente1.cpf = "40399556842";

const cliente2 = new Cliente();
cliente2.nome = "Mirian";
cliente2.cpf = "45678912312";

const ContaCorrete1 = new ContaCorrete();
ContaCorrete1.agencia = 1001;
ContaCorrete1.depositar(100);
ContaCorrete1.cliente = cliente1;

const ContaCorrete2 = new ContaCorrete();
ContaCorrete2.agencia = 1002;
ContaCorrete2.cliente = cliente2;

ContaCorrete1.transferir(25, ContaCorrete2);

//console.log(cliente1);
console.log(ContaCorrete1);
console.log(ContaCorrete2);

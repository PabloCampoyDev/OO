import { Cliente } from "./Cliente.js";
import { ContaCorrete } from "./ContaCorrente.js";

const cliente1 = new Cliente("Pablo", "40399556842");
const cliente2 = new Cliente("Mirian", "45678912312");

const ContaCorrete1 = new ContaCorrete(cliente1, 1001);
const ContaCorrete2 = new ContaCorrete(cliente2, 1002);

let valor = 200;
ContaCorrete1.transferir(valor, ContaCorrete2);
console.log(valor);

//console.log(cliente1);
console.log(ContaCorrete1);
console.log(ContaCorrete2);

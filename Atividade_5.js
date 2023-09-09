let saldoConta = 100.000;

const historico = [];

function depositarDinheiro() {
    const valorDeposito = parseFloat(prompt("Olá sr(a) quanto deseja depositar na sua conta?"));

    if (!isNaN(valorDeposito) && valorDeposito >= 0) {
        saldoConta += valorDeposito;
        const dataTransacao = new Date();

        historico.push({ tipo: "Depósito", valor: valorDeposito, saldo: saldoConta, data: dataTransacao, });

        console.log(`Seu depósito no valor de R$ ${valorDeposito} foi realizado com sucesso no dia ${dataTransacao.toLocaleString()}`);
        console.log(`O seu saldo atual é de: R$ ${saldoConta.toFixed(2)}`);
    } else {
        console.log("Desculpe, mas o seu valor de depósito é inválido ou negativo, tente novamente.");
    }
}

function sacarDinheiro() 
{
    const valorSaque = parseFloat(prompt("Quanto o sr(a) deseja sacar da sua conta?"));

    if (!isNaN(valorSaque) && valorSaque >= 0) {

        if (saldoConta >= valorSaque) {
            saldoConta -= valorSaque;
            const dataTransacao = new Date();

            historico.push({ tipo: "Saque", valor: valorSaque, saldoConta, data: dataTransacao });

            console.log(`Seu saque no valor R$ ${valorSaque} foi realizado com sucesso no dia ${dataTransacao.toLocaleString()}`);
            console.log(`Sr(a) seu saldo atualmente é R$ ${saldoConta.toFixed(2)}`);
        } else {
            console.log("Atualmente o seu saldo é insuficiente para realizar esse valor de saque.");
        }

        } else {
        console.log("O valor de saque que você inseriu é inválido!");
        }
}
function verSaldoBancario() {
    console.log(`O seu saldo atual é: R$ ${saldoConta.toFixed(2)}`);
}

function historicoTransacao() 
{
    console.log("Sr(a) seu histórico de transações é: ");

    historico.forEach((transacao, index) => 
    {
     console.log(`${index + 1}. Tipo: ${transacao.tipo}, Valor: R$ ${transacao.valor}, Seu saldo após a transação: R$ ${transacao.saldo}, Data: ${transacao.data.toLocaleString()}`);

    });
}

while (true) 
{
    console.log("\nPor favor, escolha a opção que você deseja!");
    console.log("1. Depósito");
    console.log("2. Saque");
    console.log("3. Saldo");
    console.log("4. Histórico de transações");
    console.log("5. Sair");

    const escolha = Number(prompt("Por favor escolha uma opção: "));

    switch (escolha) {
        case 1:
            depositarDinheiro();
            break;

        case 2:
            sacarDinheiro();
            break;

        case 3:
            verSaldoBancario();
            break;

        case 4:
            historicoTransacao();
            break;

        case 5:
            console.log("Até mais, encerrando o sistema...");
            Process.exit(0);
            break;

        default:
            console.log("Opçõa inválida, por favor escolha um número entre 1 e 5");
    }
}
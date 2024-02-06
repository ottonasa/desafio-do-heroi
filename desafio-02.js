let resultado = saldoJogador(100, 33)
let nivel = calcularNivelJogador(resultado)

function saldoJogador(numVitorias, numDerrotas) {
    let saldoAtual = numVitorias - numDerrotas
    return saldoAtual
}
function calcularNivelJogador(resultado) {
    if (resultado < 10) {
        return "Ferro"
    } else if (resultado > 10 && resultado <= 20) {
        return "Bronze"
    }
    else if (resultado > 20 && resultado <= 50) {
        return "Prata"
    }
    else if (resultado > 50 && resultado <= 80) {
        return "Ouro"
    }
    else if (resultado > 80 && resultado <= 90) {
        return "Diamante"
    }
    else if (resultado > 90 && resultado <= 100) {
        return "Lendário"
    }
    else {
        return "Imortal"
    }
}

console.log(`O herói tem saldo ${resultado} e está no nível ${nivel}`)

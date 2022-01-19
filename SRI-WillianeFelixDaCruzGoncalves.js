/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Williane Felix da Cruz Gonçalves
 * Curso: TSI
 * Segunda Recuperação Individual
 *
 */

const prompt = require('prompt-sync')();

function main() {
	let opcao = -1;

	do {
		imprimirMenu()
		opcao = Number(prompt('Digite uma opção: '))

		switch (opcao) {
			case 1:
				jogar()
				break
			case 2:
				sobre()
				break
		}
	} while (opcao != 3);
}

function imprimirMenu() {
	console.log("\n=============== JOGO DA VELHA ====================\n");
	console.log('Opções:')
	console.log('(1) Jogar')
	console.log('(2) Sobre')
	console.log('(3) Sair')
}

function sobre() {
	console.log("\n")
	console.log("Instituto Federal de Educacao, Ciencia e Tecnologia - IFPE")
	console.log("Cursos: Informatica para Internet | Sistemas para Internet")
	console.log("Componentes Curriculares: Logica de Programacao e Estrutura de Dados | Introducao a Programacao Imperativa")
	console.log("Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br")
	console.log("Aluna: Williane Felix - wfcg@discente.ifpe.edu.br")
	console.log("\n")
}

function jogar() {
	let jogador, maquina, minhaVez = true;
	const tabuleiro = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];

	console.log("\nEscolha com qual peça deseja jogar:");
	console.log("1) X");
	console.log("2) O");
	let opcao = Number(prompt('Digite uma opção: '));
	console.log("\n");

	switch (opcao) {
		case 1:
			jogador = "X";
			maquina = "O";
			break;
		case 2:
			jogador = "O";
			maquina = "X";
			break;
		default:
			console.log("Opção inválida")
			return;
	}


	let fimdejogo = false;
	do {
		imprimirTabuleiro(tabuleiro);

		if (minhaVez == true) {
			turnoJogador(jogador, tabuleiro);
			minhaVez = false;
		} else {
			turnoMaquina(maquina, tabuleiro);
			minhaVez = true;
		}

		fimdejogo = verificaSeVenceu(tabuleiro)
	} while (fimdejogo == false);

	if (minhaVez == false) {
		console.log("Parabéns você venceu! Jogo finalizado!\n\n")
	} else {
		console.log("Não foi dessa vez, a máquina venceu! Jogo finalizado!\n\n")
	}

}

function imprimirTabuleiro(tabuleiro) {
	console.log("\n");
	for (let i = 0; i < tabuleiro.length; i++) {
		console.log(tabuleiro[i][0], "|", tabuleiro[i][1], "|", tabuleiro[i][2]);
		console.log("________")
	}
	console.log("\n");
}

function turnoJogador(jogador, tabuleiro) {
	console.log("\nÉ a sua vez!\n");

	let linha, coluna;
	let jogadaEValida = false;
	while (jogadaEValida == false) {
		linha = Number(prompt('Escolha uma linha (começando por zero): '));
		coluna = Number(prompt('Escolha uma coluna (começando por zero): '));
		jogadaEValida = verificarSeJogadaEValida(tabuleiro, linha, coluna);
		if (jogadaEValida == false) {
			console.log("Jogada inválida!\n")
		}
	}

	tabuleiro[linha][coluna] = jogador;
}

function turnoMaquina(maquina, tabuleiro) {
	console.log("\nÉ a vez do computador!\n");

	let linha, coluna;
	let jogadaEValida = false;
	while (jogadaEValida == false) {
		linha = parseInt(Math.random() * 3);
		coluna = parseInt(Math.random() * 3);
		jogadaEValida = verificarSeJogadaEValida(tabuleiro, linha, coluna);
	}

	tabuleiro[linha][coluna] = maquina;
}

function verificarSeJogadaEValida(tabuleiro, linha, coluna) {
	if (linha < 0 || linha > 2) {
		return false;
	}

	if (coluna < 0 || coluna > 2) {
		return false;
	}

	const jaEstaPreenchido = tabuleiro[linha][coluna] != "";
	if (jaEstaPreenchido == true) {
		return false;
	}
}

function verificaSeVenceu(tabuleiro) {
	let resultado = false;

	// verifica se alguma linha foi vencedora
	for (let i = 0; i < tabuleiro.length; i++) {
		if (tabuleiro[i][0] != "" && tabuleiro[i][1] != "" && tabuleiro[i][2] != "") {
			if (tabuleiro[i][0] == tabuleiro[i][1] && tabuleiro[i][1] == tabuleiro[i][2]) {
				resultado = true;
				break;
			}
		}
	}

	// verifica se alguma coluna foi vencedora
	for (let i = 0; i < tabuleiro.length; i++) {
		if (tabuleiro[0][i] != "" && tabuleiro[1][i] != "" && tabuleiro[2][i] != "") {
			if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[1][i] == tabuleiro[2][i]) {
				resultado = true;
				break;
			}
		}
	}

	// verifica se a diagonal principal foi vencedora
	if (tabuleiro[0][0] != "" && tabuleiro[1][1] != "" && tabuleiro[2][2] != "") {
		if (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2]) {
			resultado = true;
		}
	}

	// verifica se a diagonal secundaria foi vencedora
	if (tabuleiro[0][2] != "" && tabuleiro[1][1] != "" && tabuleiro[2][0] != "") {
		if (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0]) {
			resultado = true;
		}
	}

	return resultado;
}

main();
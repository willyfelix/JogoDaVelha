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


// este exemplo requer a instalação da biblioteca prompt-sync
// comando para instalação: npm install prompt-sync
// mais detalhes em https://www.npmjs.com/package/prompt-sync


const prompt = require('prompt-sync')();

// para adicionar mais opções ao menu altere esta função
function imprimirMenu() {
	console.log("===== JOGO DA VELHA =====")
	console.log('Opções:')
	console.log('(1) Jogar')
	console.log('(2) Sobre')
	console.log('(3) Sair')
}

const jogador1 = "X";
const jogador2 = "O";
var jogadordaVez = jogador1;
var fimdejogo = false;

function jogar() {

   
}
function verificaSeVenceu() {

    for(i = 0; i; );

}

function sobre() {
	console.log("Instituto Federal de Educacao, Ciencia e Tecnologia - IFPE")
	console.log("Cursos: Informatica para Internet | Sistemas para Internet")
 	console.log("Componentes Curriculares: Logica de Programacao e Estrutura de Dados | Introducao a Programacao Imperativa")
 	console.log("Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br")	
    console.log("Aluna: Williane Felix - wfcg@discente.ifpe.edu.br")	
}
 
var opcao = -1

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

} while (opcao != 3)
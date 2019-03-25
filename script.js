function acao() {
	var divv = document.getElementById('hello ');
	var trocar = divv.innerHTML;
	divv.innerHTML = 'helooooooo';
}

function todo() {
	var pegar = document.getElementById("inputt").value;
	var listaa = document.getElementById("lista").innerHTML;

	listaa = listaa + "<li>"+ pegar +"</li>";
	document.getElementById("lista").innerHTML = listaa;

}

function trocarDiv() {
	var area2 = document.getElementById("area2");
	var texto = prompt("Digite alguma coisa para alterar");

	area2.innerHTML = texto;
}

document.write("hello world")

function alterarEAcrescentar(nome, idade) {
	var area3 = document.getElementById("area3");
	var texto = prompt("Qual é o seu sobrenome?");

	area3.innerHTML = nome+ " "+texto+" tem "+idade+" anos";
}

// function adicionarIngrediente() {
// 	var ing = document.getElementById("ingrediente").value;

// 	var listahtml = document.getElementById("lista").innerHTML;

// 	listahtml = listahtml +"<li>"+ing+"</li>";

// 	document.getElementById("lista").innerHTML=listahtml;
// 	// document.getElementById("ingrediente").value = "";
// }

function somar(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	// var soma = num1 + num2;
	alert(num1 + num2);
}

var lista = ["Arroz", "Feijão", "Carne", 20];
lista[0];
lista.length

function verificar() {
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;

	if(n1 == n2) {
		alert("você acertou o número!");
	} else {
		alert("você errou o número!");
	}

	resetar();
}

function resetar() {
	document.getElementById("n2").value = "";

	var r = Math.floor(Math.random() * 100);
	document.getElementById("n1").innerHTML = r;
}

function validar(){
	var valor = document.getElementById("numeros").value;

	if (valor.length > 2){
		alert("Você digitou um número que tem mais de dois algorismos.")
		return false;
	} else {
		return true;
	}
}

function mudar(){
	var testar = document.getElementsById("testar");
	var eu = document.getElementsById("eu").value;
	
	testar.innerHTML = eu;


}

function trocarDiv() {
	var area2 = document.getElementById("area2");
	var texto = prompt("Digite alguma coisa para alterar");

	area2.innerHTML = texto;
}

function alterarEAcrescentar(nome, idade) {
	var area3 = document.getElementById("area3");
	var texto = prompt("Qual é o seu sobrenome?");

	area3.innerHTML = nome+ " "+texto+" tem "+idade+" anos";
}
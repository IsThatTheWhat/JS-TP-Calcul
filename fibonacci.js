function calcul_fibonacci(chiffre){
	var attribute_is_set = attributeIsSet(chiffre) 
	var attribute_is_correct = attributeIsCorrect(chiffre) 

	if (attribute_is_set && attribute_is_correct) {
		fibonacci(chiffre)
	}
}

function fibonacci(chiffre){
	var resultat = 1
	var fib = [0,1]

	for (var i = 1; i <= chiffre; i++) {
		fib.push(fib[i-1] + fib[i])
	}

	var index = fib.length - 2

	var resultat = ""
	for (var i = 0; i < fib.length; i++) {
		resultat += fib[i] + ' '
	};
	
	var string = '<div class="alert alert-success" role="alert" id="alert"> Fibonacci ' + chiffre + ' = <strong>' + resultat + '</strong></div>'
	
	var div_alert = document.getElementById("div_alert")
	div_alert.innerHTML = string;
}

function attributeIsSet(chiffre){
	if (!chiffre) {
		alert("Veuillez renseigner un chiffre !!!")
		return false
	}
	return true
}

function attributeIsCorrect(chiffre){
	if (isNaN(chiffre) || chiffre < 0) {
		alert("Veuillez renseigner un chiffre positif ou null!!!")
		return false
	}
	return true
}

function checkFactoriel(){
	var chiffre = document.getElementById("chiffre").value
	var chiffre_input = document.getElementById("chiffre_input")


	if (isNaN(chiffre) || chiffre < 0) {
		chiffre_input.classList.add('has-error')
	} else {
		chiffre_input.classList.add('has-success')
	}

}

var isCtrl = false; 
document.onkeyup=function(e){ if(e.which == 17) isCtrl=false; } 
document.onkeydown=function(e){
 	if(e.which == 17) isCtrl=true; 
	if(e.which == 67 && isCtrl == true) {
		var chiffre = document.getElementById("chiffre").value

		calcul_factoriel(chiffre)
	}
} 

$(function () {
    $(document).ready(function() {
        document.getElementById('calculer').addEventListener('click', function (e) {
	        e.preventDefault()
	        calcul_fibonacci(document.getElementById('chiffre').value)
	    })
    });
});

$(function () {
    $(document).ready(function() {
        document.getElementById('effacer').addEventListener('click', function (e) {
	        e.preventDefault()
	        document.getElementById('chiffre').value = null
	    })
    });
});
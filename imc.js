function calcul_imc(masse, taille){
	var attributes_are_set = attributesAreSet(masse, taille) 
	var attributes_are_correct = attributesAreCorrect(masse, taille) 

	if (attributes_are_set && attributes_are_correct) {
		imc(masse, taille)
	}
}

function imc(masse, taille){
	var imc_value = masse/(taille*taille);
	var etat = ""
	var alert = ""

	if (document.getElementById('inlineRadio1').checked) {
		if (imc_value <= 20.7) {
			etat = "maigre"
			alert = "success"
		}else if (imc_value > 20.7 && imc_value <= 26.4) {
			etat = "poids idéal"
			alert = "success"		
		}else if (imc_value > 26.4 && imc_value <= 27.8) {
			etat = "à la limite du surpoids"
			alert = "danger"
		}else if (imc_value > 27.8 && imc_value <= 31.1) {
			etat = "surpoids"
			alert = "danger"
		}else {
			etat = "obésité"
			alert = "danger"
		}
	} else if (document.getElementById('inlineRadio2').checked) {
		if (imc_value <= 19.1) {
			etat = "maigre"
			alert = "success"
		}else if (imc_value > 19.1 && imc_value <= 25.8) {
			etat = "poids idéal"
			alert = "success"		
		}else if (imc_value > 25.8 && imc_value <= 27.3) {
			etat = "à la limite du surpoids"
			alert = "danger"
		}else if (imc_value > 27.3 && imc_value <= 32.3) {
			etat = "surpoids"
			alert = "danger"
		}else {
			etat = "obésité"
			alert = "danger"
		}
	};

	var string = '<div class="alert alert-' + alert +'" role="alert" id="alert"> Votre IMC est : <strong>' + imc_value.toFixed(2) + '</strong>.<br> Votre état est : <strong>' + etat + '</strong>!!!</div>'

	var div_alert = document.getElementById("div_alert")
	div_alert.innerHTML = string;
}

function attributesAreSet(masse, taille){
	if (!masse) {
		alert("Veuillez renseigner votre masse en kg !!!")
		return false
	}
	if (!taille) {
		alert("Veuillez renseigner votre taille en m !!!")
		return false
	}

	return true
}

function attributesAreCorrect(masse, taille){
	if (isNaN(masse) || masse <= 0) {
		alert("Veuillez renseigner une masse positive !!!")
		return false
	}
	if (isNaN(taille) || taille <= 0) {
		alert("Veuillez renseigner une taille positive !!!")
		return false
	}
	return true
}

function checkMasse(){
	var masse = document.getElementById("masse").value
	var masse_input = document.getElementById("masse_input")


	if (isNaN(masse) || masse <= 0) {
		masse_input.classList.add('has-error')
	} else {
		masse_input.classList.add('has-success')
	}

}

function checkTaille(){
	var taille = document.getElementById("taille").value
	var taille_input = document.getElementById("taille_input")


	if (isNaN(taille) || taille <= 0) {
		taille_input.classList.add('has-error')
	} else {
		taille_input.classList.add('has-success')
	}

}

var isCtrl = false; 
document.onkeyup=function(e){ if(e.which == 17) isCtrl=false; } 
document.onkeydown=function(e){
 	if(e.which == 17) isCtrl=true; 
	if(e.which == 67 && isCtrl == true) {
		var taille = document.getElementById("taille").value
		var masse = document.getElementById("masse").value

		calcul_imc(masse, taille)
	}
} 


$(function () {
    $(document).ready(function() {
        document.getElementById('calculer').addEventListener('click', function (e) {
	        e.preventDefault()
	        calcul_imc(document.getElementById('masse').value, document.getElementById('taille').value)
	    })
    });
});

$(function () {
    $(document).ready(function() {
        document.getElementById('effacer').addEventListener('click', function (e) {
	        e.preventDefault()
	        document.getElementById('masse').value = null
	        document.getElementById('taille').value = null
	    })
    });
});
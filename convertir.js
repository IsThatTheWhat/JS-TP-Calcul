var div_calculer = document.getElementById("div_calculer")
div_calculer.style.visibility = 'hidden'

var div_input = document.getElementById("div_input")
div_input.style.visibility = 'hidden'


function showInputs(){
	var conversion_value = document.getElementById("conversion").value
	var invert = document.getElementById("invert")
	var div_calculer = document.getElementById("div_calculer")
	var div_input = document.getElementById("div_input")

	var label_input = document.getElementById("label_input")

	if (!invert.checked) {
		switch(conversion_value) {
			case "1":
				label_input.innerText  = 'cm value'
			break;

			case "2":
				label_input.innerText  = 'kg value'
			break;

			case "3":
				label_input.innerText  = 'km value'
			break;

			case "4":
				label_input.innerText  = '°c value'
			break;

			default:
				div_calculer.style.visibility = 'hidden'
				div_input.style.visibility = 'hidden'
		}
	} else {
		switch(conversion_value) {
			case "1":
				label_input.innerText  = 'inch value'
			break;

			case "2":
				label_input.innerText  = 'pound value'
			break;

			case "3":
				label_input.innerText  = 'mile value'
			break;

			case "4":
				label_input.innerText  = '°F value'
			break;

			default:
				div_calculer.style.visibility = 'hidden'
				div_input.style.visibility = 'hidden'
		}
	}
	

	if (conversion_value != 0) {
		div_calculer.style.visibility = 'visible'
		div_input.style.visibility = 'visible'
	}
}

function calcul_conversion(chiffre){
	var attribute_is_set = attributeIsSet(chiffre) 
	var attribute_is_correct = attributeIsCorrect(chiffre) 

	if (attribute_is_set && attribute_is_correct) {
		conversion(chiffre)
	}
}

function conversion(chiffre){
	chiffre = parseFloat(chiffre)
	var conversion_value = document.getElementById("conversion").value
	var invert = document.getElementById("invert")

	var resultat = 0
	var unite_1 = ""
	var unite_2 = ""

	console.log(invert.checked, conversion_value)

	if (!invert.checked) {
		switch(conversion_value) {
			case "1":
				unite_1 = "cm"
				unite_2 = "inches"
				resultat = chiffre * 0.393701
			break;

			case "2":
				unite_1 = "kg"
				unite_2 = "pounds"
				resultat = chiffre * 2.20462
			break;

			case "3":
				unite_1 = "km"
				unite_2 = "mile"
				resultat = chiffre * 0.621371
			break;

			case "4":
				unite_1 = "°c"
				unite_2 = "°F"
				resultat = 1.8 * chiffre + 32
			break;

			default:
				div_calculer.style.visibility = 'hidden'
				div_input.style.visibility = 'hidden'
		}
	} else {
		switch(conversion_value) {
			case "1":
				unite_1 = "cm"
				unite_2 = "inches"
				resultat = chiffre * 2.54
			break;

			case "2":
				unite_1 = "pounds"
				unite_2 = "kg"
				resultat = chiffre * 0.453592
			break;

			case "3":
				unite_1 = "miles"
				unite_2 = "km"
				resultat = chiffre * 1.60934
			break;

			case "4":
				unite_1 = "°F"
				unite_2 = "°c"
				resultat = (chiffre - 32) / 1.8
			break;

			default:
				div_calculer.style.visibility = 'hidden'
				div_input.style.visibility = 'hidden'
		}
	}


	var string = '<div class="alert alert-success" role="alert" id="alert">' + chiffre + ' ' + unite_1 + ' = <strong>' + resultat  + '</strong> ' + unite_2 + '</div>'
	
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

function checkConversion(){
	var chiffre = document.getElementById("input").value
	var chiffre_input = document.getElementById("div_input")


	if (isNaN(chiffre) || chiffre < 0) {
		chiffre_input.classList.add('has-error')
	} else {
		chiffre_input.classList.add('has-success')
	}

}

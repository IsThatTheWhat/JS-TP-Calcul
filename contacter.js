function send(){
	var name = document.getElementById("name").value
	var email = document.getElementById("email").value
	var message = document.getElementById("message").value

	var attribute_are_set = attributeAreSet(name, email, message)
	var attribute_are_correct = attributeAreCorrect(name, email, message)

	if (attribute_are_set && attribute_are_correct) {
		sendMessage(name, email)
	}

}

function attributeAreSet(name, email, message){
	if (!name) {
		alert("Veuillez renseigner un nom !!!")
		return false
	}
	if (!email) {
		alert("Veuillez renseigner un email !!!")
		return false
	}
	if (!message) {
		alert("Veuillez renseigner un message !!!")
		return false
	}
	return true
}

function attributeAreCorrect(name, email, message){
	if (!name) {
		alert("Veuillez renseigner un nom !!!")
		return false
	}

	var tab = email.split('@')
	if (tab.length != 2) {
		alert("Veuillez renseigner un email valide !!!")
		return false
	} 
	var tab2 =  tab[1].split('.')
	if (tab2.length != 2) {
		alert("Veuillez renseigner un email valide !!!")
		return false
	}

	if (!message) {
		alert("Veuillez renseigner un message !!!")
		return false
	}
	
	return true
}

function checkName(){
	var name = document.getElementById("name").value
	var div_input_name = document.getElementById("div_input_name")
	if (!name) {
		div_input_name.classList.add('has-error')
	} else {
		div_input_name.classList.add('has-success')
	}	
}

function checkEmail(){
	var email = document.getElementById("email").value
	var div_input_email = document.getElementById("div_input_email")

	var tab = email.split('@')
	if (tab.length != 2) {
		div_input_email.classList.add('has-error')
	} else {
		var tab2 =  tab[1].split('.')
		if (tab2.length != 2) {
			div_input_email.classList.add('has-error')
		} else {
			div_input_email.classList.add('has-success')
		}
	}
}

function checkMessage(){
	var message = document.getElementById("message").value
	var div_input_message = document.getElementById("div_input_message")
	if (!message) {
		div_input_message.classList.add('has-error')
	} else {
		div_input_message.classList.add('has-success')
	}
}

function sendMessage(name, email) {

	var string = '<div class="alert alert-success" role="alert" id="alert"> Madame, Monsieur <strong>' + name + '</strong>, votre message sera envoyé à l\'adresse <strong>' + email + '</strong>!!!</div>'
	
	var div_alert = document.getElementById("div_alert")
	div_alert.innerHTML = string;
}
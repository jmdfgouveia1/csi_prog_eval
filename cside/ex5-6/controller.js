	/**
	 * Controller script of the simple chat app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	/**
	 * @global {string}
	 */
	var file = "api.php";
	 
	/**
	 * The canSend() function will be called constantly by the setInterval() method.
	 */
	setInterval(canSend, 1);
	
	/**
	 * Function that checks if all input values are inserted so that the message can be sent.
	 */
	function canSend() {
		var btn = document.getElementsByClassName("btn-default");
		if (validateForm()){
			if ($('.btn-default').prop("disabled", true)) {
				$('.btn-default').prop("disabled", false);
			}
		}
		else {
			if ($('.btn-default').prop("disabled", false)) {
				$('.btn-default').prop("disabled", true);
			}
		}
	}
	
	/**
	 * Function that sets the program's HTTP POST operation in motion.
	 */
	function startPost() {
		var u = $('input[name=u]').val();
		var m = $('input[name=m]').val();
		send(u, m, file);
		$('input[name=u]').val('');
		$('input[name=m]').val('');
	}
	
	/**
	 * Callback function that takes each name-message combination obtained from the database and writes it on the chat window via jQuery. A maximum of 50 messages can be stored in the chat window.
	 */
	function chatOutput(n, d) {
		var nf = 0;
		var m = document.getElementsByClassName("message");
		while (m[0].hasChildNodes()) {
			m[0].removeChild(m[0].lastChild);
		}
		if (n > 50){
			nf = 50;
		}
		else {
			nf = n;
		}
		for (i = 0; i < nf; i++){
			var p = document.createElement("p");
			var node = document.createTextNode(d[i].name + ": " + d[i].message);
			p.appendChild(node);
			m[0].appendChild(p);
		}
	}
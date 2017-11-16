	/**
	 * Model script of the simple chat app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	/**
	 * The receiveCount() function will be called constantly by the setInterval() method.
	 */
	setInterval(receiveCount, 50, file);
	
	/**
	 * Function that checks if all input values are inserted. Used by the canSend() function.
	 * @return {boolean}
	 */
	function validateForm() {
		var valid = true;
		$('.form-control').each(function() {
			if ($(this).val() === '') {
				valid = false;
			}
		});
		return valid;
	}
	
	/**
	 * HTTP POST request performed.
	 * Goal: post the inserted name and message in the main API.
	 * @param {string} {string} {string}
	 */
	function send(u, m, file) {
		$.post(file, {name: u, message: m});
	}
	
	/**
	 * HTTP GET request performed.
	 * Goal: get the current total number of name-message combinations stored in the database from a supplementary API.
	 * @param {string}
	 */
    function receiveCount(file) {
	    $.getJSON("count.php", function(data){
			receive(parseInt(data['COUNT(*)']), file, chatOutput);
		});
    }
	
	/**
	 * HTTP GET request performed.
	 * Goal: get the messages inserted in the database.
	 * @param {number} {string} {function}
	 */
    function receive(n, file, callback) {
	    $.getJSON(file, function(data){
			if (callback !== undefined && callback !== null) {
				callback(n, data);
			}
		});
    }
	
	
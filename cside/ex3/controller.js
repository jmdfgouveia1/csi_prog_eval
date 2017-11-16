	/**
	 * Controller script of the Chuck Norris joke app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	/**
	 * Function that sets the mechanism of HTTP GET requests in motion.
	 */
	function startUpdates() {
		$('.btn-default').prop("disabled", true);
		jokeBegin();
	}
	
	/**
	 * Callback function that takes each joke obtained in the model script and writes it in the HTML page via jQuery.
	 */
	function jokeReturn(joke) {
		if (joke != undefined) {
			$(".panel-body").html(joke);
		}
		else {
			console.log("No joke found with this ID.");
		}
	}
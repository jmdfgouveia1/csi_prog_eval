	/**
	 * Model script of the Chuck Norris joke app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	/**
	 * @global {number}
	 */
	var count = 0;
	
	/**
	 * HTTP GET request performed. 
	 * Goal #1: get the total amount of JSON objects stored by the ICNDB API.
	 * Goal #2: send each index of that total to the jokeGet() function in periods of roughly 7.5 seconds, keeping the HTML page updaded in that interval.
	 */
	function jokeBegin() {
		$.getJSON("https://api.icndb.com/jokes/count", function(data){
			count = data.value+1;
			for (i = 1; i < count; i++){
				if (i != 1) {
					setTimeout(jokeGet, i*7500, i, jokeReturn);
				}
				else {
					jokeGet(i, jokeReturn);
				}
			}
		});
	}
	
	/**
	 * HTTP GET request performed.
	 * Goal: get each joke stored in the ICNDB API.
	 * The function outputs each joke by navigating the JSON tree in "data", getting to the branch in "value" and finally reaching the result in "joke".
	 * If there is no joke with a certain index, the global variable "count" will be incremented, since that index is not included in the total object amount.
	 * @param {number} {function}
	 */
    function jokeGet(n, callback) {
	    $.getJSON("https://api.icndb.com/jokes/" + n, function(data){
			if (data.type == "success") {
				if (callback !== undefined && callback !== null) {
					callback(data.value.joke);
				}
			}
			else {
				count++;
				if (callback !== undefined && callback !== null) {
					callback(undefined);
				}
			}
		});
    }
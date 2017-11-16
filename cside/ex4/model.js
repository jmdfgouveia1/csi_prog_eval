	/**
	 * Model script of the news app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	/**
	 * HTTP GET request performed.
	 * Goal: get the amount of news articles currently stored in the database from a supplementary API.
	 */
	function getNewsCount() {
		$.getJSON("count.php", function(data){
			getTheNews(parseInt(data['COUNT(*)']), newsOutput);
		});
	}
	
	/**
	 * HTTP GET request performed.
	 * Goal: get an array of values inserted in the database's news table.
	 * @param {number} {function}
	 */
    function getTheNews(n, callback) {
	    $.getJSON("api.php", function(data){
			if (callback !== undefined && callback !== null) {
				callback(n, data);
			}
		});
    }
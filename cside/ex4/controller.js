	/**
	 * Controller script of the news app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	/**
	 * Function that sets the mechanism of HTTP GET requests in motion.
	 */
	function startOperation() {
		$('.btn-default').prop("disabled", true);
		getNewsCount();
	}
	
	/**
	 * Callback function that takes each news article obtained in the model script and writes it on the HTML page via jQuery.
	 */
	function newsOutput(n, d) {
		for (i = 0; i < n; i++){
			var news = document.getElementsByClassName("news-items");
			var di = document.createElement("div");
			di.className = "panel panel-default";
			var di2 = document.createElement("div");
			di2.className = "panel-heading";
			var par = document.createElement("p");
			par.className = "text-center headline";
			var b = document.createElement("b");
			var node = document.createTextNode(d[i].title);
			b.appendChild(node);
			par.appendChild(b);
			di2.appendChild(par);
			var img = document.createElement("img");
			img.src = d[i].picture;
			img.className = "img-thumbnail img-responsive center-block";
			di2.appendChild(img);
			di.appendChild(di2);
			var di3 = document.createElement("div");
			di3.className = "panel-body";
			var node2 = document.createTextNode(d[i].description);
			di3.appendChild(node2);
			di.appendChild(di3)
			news[0].appendChild(di);
		}
	}
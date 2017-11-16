	/**
	 * Controller script of the power-to-energy converter app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	/**
	 * The canConvert() function will be called constantly by the setInterval() method.
	 */
	setInterval(canConvert, 1);
	
	/**
	 * Function that checks if all input values are inserted so that the conversion can be made.
	 */
	function canConvert() {
		if (validateForm()){
			if ($('#convertButton').prop("disabled", true)) {
				$('#convertButton').prop("disabled", false);
			}
		}
		else {
			if ($('#convertButton').prop("disabled", false)) {
				$('#convertButton').prop("disabled", true);
			}
		}
	}
	
	/**
	 * Function called by the "Convert" button, which retrieves the information from the input fields and calls six other functions.
	 */
    	function convert() {
		var d = document.getElementsByName("d");
		var t = document.getElementsByName("t");
		var p = document.getElementsByName("power");
		var ts = timestamp_fill(d, t);
		var ps = power_stamp_fill(d, t, p);
		var pv = power_value_fill(ts, ps);
		var is = determine_intervals(ts);
		var ev = determine_energy_values(ts, pv);
		output(is, ev);
	}
	
	/**
	 * Function that generates the requested output. 
	 * For each interval, the beginning timestamp limit, the ending timestamp limit and the energy value are written.
	 * Any existing output as a result of previous conversions is erased to make room for the output of this conversion.
	 * @param {array} {array}
	 */
	function output(array, array2) {
		var o = document.getElementById("output");
		while (o.hasChildNodes()) {
			o.removeChild(o.lastChild);
		}
		for (z = 0; z < array2.length; z++){
			var tr = document.createElement("tr");
			var f = 3;
			while (f > 0){
				var td = document.createElement("td");
				var text = "";
				if (f == 3) {
					text = array[z];
				}
				else if (f == 2) {
					text = array[z+1];
				}
				else if (f == 1) {
					text = array2[z];
				}
				var node = document.createTextNode(text);
				td.appendChild(node);
				tr.appendChild(td);
				f--;
			}
			o.appendChild(tr);
		}
	}
	
	/**
	 * Function dedicated to generating another group of fields for date, time and power reading, respectively.
	 * The process involves calling 3 other functions.
	 */
	function addAnotherGroup() {
		addAnotherDate();
		addAnotherTime();
		addAnotherPowerValue();
	}
	
	/**
	 * Function dedicated to generating another date.
	 */
	function addAnotherDate() {
		var form = document.getElementsByClassName("form-group");
		var p = document.createElement("p");
		var l = document.createElement("label");
		var node = document.createTextNode("Date (DD/MM/YYYY): ");
		l.appendChild(node);
		p.appendChild(l);
		var input = document.createElement("input");
		input.type = "text";
		input.name = "d";
		input.className = "form-control";
		input.required = true;
		p.appendChild(input);
		form[0].appendChild(p);
	}
	
	/**
	 * Function dedicated to generating another time.
	 */
	function addAnotherTime() {
		var form = document.getElementsByClassName("form-group");
		var p = document.createElement("p");
		var l = document.createElement("label");
		var node = document.createTextNode("Time (HH:mm:ss): ");
		l.appendChild(node);
		p.appendChild(l);
		var input = document.createElement("input");
		input.type = "text";
		input.name = "t";
		input.className = "form-control";
		input.required = true;
		p.appendChild(input);
		form[0].appendChild(p);
	}
	
	/**
	 * Function dedicated to generating another power value.
	 */
	function addAnotherPowerValue() {
		var form = document.getElementsByClassName("form-group");
		var p = document.createElement("p");
		var l = document.createElement("label");
		var node = document.createTextNode("Power reading (in Watts): ");
		l.appendChild(node);
		p.appendChild(l);
		var input = document.createElement("input");
		input.type = "number";
		input.name = "power";
		input.className = "form-control";
		input.step = "any";
		input.min = "0";
		input.required = true;
		p.appendChild(input);
		form[0].appendChild(p);
	}

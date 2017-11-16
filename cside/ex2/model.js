	/**
	 * Model script of the power-to-energy converter app.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	/**
	 * Function that checks if all input values are inserted. Used by the canConvert() function.
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
	 * Function that retrieves the inserted timestamps and returns an array with all the timestamps in ascending order.
	 * @param {array} {array}
	 * @return {array}
	 */
	function timestamp_fill(d, t) {
		var array = [];
		for (i = 0; i<d.length; i++){
			var dt = moment(d[i].value + "T" + t[i].value + "Z", "DD/MM/YYYYTHH:mm:ssZ");
			array.push(dt.unix());
		}
		
		return array.sort(function(a, b){return a-b});
	}
	
	/**
	 * Function that returns an array that puts each recorded timestamp next to the power value it refers to.
	 * Resulting array generated for the power_value_fill() function.
	 * @param {array} {array} {array}
	 * @return {array}
	 */
	function power_stamp_fill(d, t, p) { 
		var array = [];
		for (i = 0; i<d.length; i++){
			var dt = moment(d[i].value + "T" + t[i].value + "Z", "DD/MM/YYYYTHH:mm:ssZ");
			array.push(dt.unix());
			array.push(parseInt(p[i].value));
		}
		
		return array;
	}
	
	/**
	 * Function that uses the array returned by power_stamp_fill() to return an array ordering the power values.
	 * The power values will be ordered from the one that was recorded the earliest to the one that was recorded the latest.
	 * @param {array} {array}
	 * @return {array}
	 */
	function power_value_fill(array, array2) {
		var array3 = [];
		for (a = 0; a<array.length; a++){
			for (b = 0; b<array2.length; b = b+2){
				if (array[a] == array2[b])
					array3.push(array2[b+1]);
			}
		}
		
		return array3;
	}
	
	/**
	 * Function that returns an ordered array of timestamps signalling the beginning/end of a 15-minute interval.
	 * When a retrieved timestamp goes beyond the 15-minute limit, that is a signal to end the current interval and begin a new one.
	 * Also includes an error operation for when there aren't any retrieved timestamps in an interval.
	 * @param {array}
	 * @return {array}
	 */
	function determine_intervals(array) {
		var array2 = [];
		array2.push(array[0]);
		var rev_epoch = moment.unix(array[0]);
		var dt15 = moment(rev_epoch).add(15, 'm');
		for (j = 0; j<array.length; j++){
			if (array[j] > dt15.unix()){ 
				array2.push(dt15.unix());
				dt15 = moment(dt15).add(15, 'm');
				if (array[j] > dt15.unix()){
					window.alert("Interval with no power readings detected. Please separate the conversions.");
					exit();
				}
			}
			if (j == array.length-1){
				array2.push(dt15.unix());
			}
		}
		
		return array2;
	}
	
	/**
	 * Function that converts the recorded power values and returns an array of energy values, each one of them correspondent to a 15-minute interval.
	 * Conversion made from watts to kilowatt hours.
	 * @param {array} {array}
	 * @return {array}
	 */
	function determine_energy_values(array, array2) {
		var array3 = [];
		var total = 0;
		var k = 0;
		var rev_epoch = moment.unix(array[0]);
		var dt15 = moment(rev_epoch).add(15, 'm');
		for (j = 0; j<array.length; j++){
			if (array[j] > dt15.unix()){ 
				dt15 = moment(dt15).add(15, 'm');
				var energy_value = ((total/parseFloat(k))/1000.0)*0.25;
				array3.push(energy_value);
				total = 0;
				k = 0;
			}
			total += parseInt(array2[j]);
			k++;
			if (j == array.length-1){
				var energy_value = ((total/parseFloat(k))/1000.0)*0.25;
				array3.push(energy_value);
			}
		}
		
		return array3;
	}
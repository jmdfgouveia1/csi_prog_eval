	/**
	 * Unit tests relevant to the conversion app.
	 * A total of 8 tests are performed.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	QUnit.test("conversion", function(assert) {
		function input() {
			addAnotherGroup();
			$("input[name=d]").eq(0).val("24/08/2010");
			$("input[name=t]").eq(0).val("14:16:55");
			$("input[name=power]").eq(0).val(230);
			$("input[name=d]").eq(1).val("24/08/2010");
			$("input[name=t]").eq(1).val("14:16:24");
			$("input[name=power]").eq(1).val(245);
		}
		
		input();
		
		assert.deepEqual(timestamp_fill($(".form-group").find(":input[name=d]"), $(".form-group").find(":input[name=t]")), [1282659384, 1282659415]);
		assert.deepEqual(power_stamp_fill($(".form-group").find(":input[name=d]"), $(".form-group").find(":input[name=t]"), $(".form-group").find(":input[name=power]")), [1282659415, 230, 1282659384, 245]);
		assert.deepEqual(power_value_fill([1282659384, 1282659415], [1282659415, 230, 1282659384, 245]), [245, 230]);
		assert.deepEqual(power_value_fill([1282694398, 1282694399, 1282694403], [1282694403, 315, 1282694398, 300, 1282694399, 330]), [300, 330, 315]);
		assert.deepEqual(determine_intervals([1282659384, 1282659415]), [1282659384, 1282660284]);
		assert.deepEqual(determine_intervals([1282659384, 1282659415, 1282661000, 1282661882]), [1282659384, 1282660284, 1282661184, 1282662084]);
		assert.deepEqual(determine_energy_values([1282659384, 1282659415], [245, 230]), [0.059375]);
		assert.deepEqual(determine_energy_values([1282659384, 1282659415, 1282661000], [245, 230, 100]), [0.059375, 0.025]);
	});
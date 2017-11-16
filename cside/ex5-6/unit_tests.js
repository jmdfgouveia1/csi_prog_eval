	/**
	 * Unit tests relevant to the simple chat app.
	 * A total of 2 tests are performed using a callback function.
	 * These tests use a supplementary API and a supplementary database table.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	QUnit.test("db_news", function(assert) {
		var done = assert.async();
		var i = 0;
		
		send("John Doe", "Will it blend?", "api_test.php");
		
		function chat_info(n, string, expected) {
			receive(n, "api_test.php", function(n, d) {
				if (string === "name"){
					assert.equal(d[n-1].name, expected);
				}
				else if (string === "message") {
					assert.equal(d[n-1].message, expected);
				}
				if (++i == 2) {
					done();
				}
			});
		}
		
		chat_info(1, "name", "John Doe");
		chat_info(1, "message", "Will it blend?");
	});
	/**
	 * Unit tests relevant to the Chuck Norris joke app.
	 * A total of 8 tests are performed using the program's callback function.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	
	QUnit.test("cn_jokes", function(assert) {
		var done = assert.async();
		var i = 0;
		function joke(n, expected) {
			jokeGet(n, function(j) {
				assert.equal(j, expected);
				if (++i == 8) {
					done();
				}
			});
		}
		
		joke(1, "Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.");
		joke(8, undefined);
		joke(163, "Ninjas want to grow up to be just like Chuck Norris. But usually they grow up just to be killed by Chuck Norris.");
		joke(221, "Chuck Norris is the only person to ever win a staring contest against Ray Charles and Stevie Wonder.");
		joke(352, "Chuck Norris doesn't see dead people. He makes people dead.");
		joke(502, "Chuck Norris insists on strongly-typed programming languages.");
		joke(526, "No one has ever pair-programmed with Chuck Norris and lived to tell about it.");
		joke(598, "Once Chuck Norris and Superman had a competition. The loser had to wear his underwear over his pants.");
	});
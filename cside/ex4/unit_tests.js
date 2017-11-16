	/**
	 * Unit tests relevant to the news app.
	 * A total of 8 tests are performed using a callback function.
	 * These tests are dependent on both the API and the database on their current state.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	 
	QUnit.test("db_news", function(assert) {
		var done = assert.async();
		var i = 0;
		function news(n, string, expected) {
			getTheNews(n, function(n, d) {
				if (string === "title"){
					assert.equal(d[n-1].title, expected);
				}
				else if (string === "picture") {
					assert.equal(d[n-1].picture, expected);
				}
				else if (string === "description") {
					assert.equal(d[n-1].description, expected);
				}
				if (++i == 8) {
					done();
				}
			});
		}
		
		news(1, "title", "New Economic Plan Announced By The Prime Minister");
		news(1, "description", "As a result of the country's current economic climate, the Prime Minister has decided to base the country's economic plan on how many gold you can find in the pot at the end of a rainbow, and everyone gets to pay a total tax amount of a tenth of the amount in that pot.");
		news(2, "picture", "http://images.mentalfloss.com/sites/default/files/sb10066898c-001.jpg");
		news(3, "title", "Opinion Piece: Can Death Grips Be The Future Of Music?");
		news(3, "description", "Six years ago, Death Grips took the music nerd demographic by storm with their mix of punk rock, hip hop and noise. With this in mind, it is entirely possible that a lot of popular music will sound like them in 50 years' time, for no reason other than that is simply the way popular music works.");
		news(4, "picture", "http://del.h-cdn.co/assets/17/33/980x490/landscape-1502989071-chicken-rice-casserole-delish.jpg");
		news(5, "title", "Your Future Just Might Be In The Cards!");
		news(6, "description", "The boss said there needed to be six stories in this page and we were out of ideas, so we just resorted to our fail-safe plan: a picture of a cat. Isn't the cat cute?");
	});
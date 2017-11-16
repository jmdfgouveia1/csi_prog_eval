<?php
	/**
	 * A supplementary API used to store information in the database.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	include 'db_start.php';
	
	$title1 = "New Economic Plan Announced By The Prime Minister";
	$picture1 = "http://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAApYAAAAJDc4ZDVhN2ExLTljOGQtNDZlNC04YTY3LTcwNjU1MzQ1ODk1OQ.jpg";
	$text1 = "As a result of the country's current economic climate, the Prime Minister has decided to base the country's economic plan on how many gold you can find in the pot at the end of a rainbow, and everyone gets to pay a total tax amount of a tenth of the amount in that pot.";
	
	$title2 = "Soccer To Become Obsolete By 2050";
	$picture2 = "http://images.mentalfloss.com/sites/default/files/sb10066898c-001.jpg";
	$text2 = "Based on scientific research and theorizing, scientists conclude that soccer, as we currently know it, will become obsolete roughly 30 years from now, and will be replaced by zero-gravity football where the goals are never in a fixed position.";
	
	$title3 = "Opinion Piece: Can Death Grips Be The Future Of Music?";
	$picture3 = "http://i.ytimg.com/vi/8hUY4cyw9Bo/maxresdefault.jpg";
	$text3 = "Six years ago, Death Grips took the music nerd demographic by storm with their mix of punk rock, hip hop and noise. With this in mind, it is entirely possible that a lot of popular music will sound like them in 50 years' time, for no reason other than that is simply the way popular music works.";
	
	$title4 = "How To Make Quality Casserole";
	$picture4 = "http://del.h-cdn.co/assets/17/33/980x490/landscape-1502989071-chicken-rice-casserole-delish.jpg";
	$text4 = "As sponsored by Casserole Company, Ltd., here is our comprehensive tutorial on how to make a quality casserole for dinner. First you need a bowl, and in it you put sour cheese, cottage cheese, mozzarella cheese, beef, noodles and some other ingredients and eventually you get the casserole.";
	
	$title5 = "Your Future Just Might Be In The Cards!";
	$picture5 = "http://c.tribune.com.pk/2017/10/1544814-horoscope-1509335533-324-640x480.jpg";
	$text5 = "The Daily Crystal would like to remind you to check your horoscope results. Remember: no matter if you're a Leo, Virgin, Taurus or Cancer, you will never be able to be with the celebrity you idolize.";
	
	$title6 = "Here's A Picture Of A Cat That Will Warm Your Heart";
	$picture6 = "http://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg";
	$text6 = "The boss said there needed to be six stories in this page and we were out of ideas, so we just resorted to our fail-safe plan: a picture of a cat. Isn't the cat cute?";
	
	insertNews($title1, $picture1, $text1);
	insertNews($title2, $picture2, $text2);
	insertNews($title3, $picture3, $text3);
	insertNews($title4, $picture4, $text4);
	insertNews($title5, $picture5, $text5);
	insertNews($title6, $picture6, $text6);
	
	/**
	 * Function that stores the news articles (divided by title, picture and description) into the database.
	 * @param {string} {string} {string}
	 */
	function insertNews($title, $picture, $text){
		global $conn;
		$stmt = $conn->prepare('INSERT INTO news_item (title, picture, description)
								VALUES(?, ?, ?)');
		$stmt->execute(array($title, $picture, $text));
	}
?>
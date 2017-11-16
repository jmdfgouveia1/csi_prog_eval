<?php
	/**
	 * A supplementary API that retrieves the total amount of news items that exist in the database's news table.
	 * Useful for the news app's operations.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	include 'db_start.php';
	
	global $conn;
	$stmt = $conn->prepare('SELECT COUNT(*) FROM news_item');
	$stmt->execute();
	$array = $stmt->fetch();
	echo json_encode($array, JSON_UNESCAPED_SLASHES, JSON_UNESCAPED_UNICODE);
?>
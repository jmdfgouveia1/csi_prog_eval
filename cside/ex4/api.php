<?php
	/**
	 * The main API that the news app has access to.
	 * Its function is to retrieve all the existing information stored in the database's news table and print it in JSON.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	include 'db_start.php';
	
	global $conn;
	$stmt = $conn->prepare('SELECT * FROM news_item');
	$stmt->execute();
	$array = $stmt->fetchAll();
	echo json_encode($array, JSON_UNESCAPED_SLASHES, JSON_UNESCAPED_UNICODE);
?>
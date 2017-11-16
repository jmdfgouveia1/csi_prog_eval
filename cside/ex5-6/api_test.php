<?php
	/**
	 * A supplementary API connected to a supplementary database table.
	 * Both the API and the table were created specifically for the chat app's unit tests.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	include '../ex4/db_start.php';
	
	if (isset($_POST['name'], $_POST['message'])) {
		$n = $_POST['name'];
		$m = $_POST['message'];
		global $conn;
		$stmt = $conn->prepare('INSERT INTO chatter_test (name, message)
								VALUES(?, ?)');
		$stmt->execute(array($n, $m));
	}
	
	global $conn;
	$stmt = $conn->prepare('SELECT * FROM chatter_test');
	$stmt->execute();
	$array = $stmt->fetchAll();
	echo json_encode($array, JSON_UNESCAPED_SLASHES, JSON_UNESCAPED_UNICODE);
?>
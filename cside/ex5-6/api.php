<?php
	/**
	 * The main API that the chat app has access to.
	 * It has two functions.
	 * Function 1: collect information from the chat app and store it in the database's chat table.
     * Function 2: retrieve all the existing information stored in the database's chat table and print it in JSON.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	include '../ex4/db_start.php';
	
	if (isset($_POST['name']) && isset($_POST['message'])) {
		$n = $_POST['name'];
		$m = $_POST['message'];
		global $conn;
		$stmt = $conn->prepare('INSERT INTO chatter (name, message)
								VALUES(?, ?)');
		$stmt->execute(array($n, $m));
	}
	
	global $conn;
	$stmt = $conn->prepare('(SELECT * FROM chatter
							ORDER BY id DESC
							LIMIT 50)
							ORDER BY id ASC');
	$stmt->execute();
	$array = $stmt->fetchAll();
	echo json_encode($array, JSON_UNESCAPED_SLASHES, JSON_UNESCAPED_UNICODE);
?>
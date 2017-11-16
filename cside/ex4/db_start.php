<?php
	/**
	 * API that activates the database where all the relevant information is either stored or retrieved.
	 * Uses the secure PDO class.
	 * Used by all the other custom-made APIs.
	 * @author: João Miguel Dias Ferreira Gouveia
	 */
	error_reporting(E_ALL | E_WARNING);

	$conn = new PDO('mysql:host=localhost;dbname=cside', 'joao_gouveia', 'JchDv8TPFtiGhTpx');
	$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
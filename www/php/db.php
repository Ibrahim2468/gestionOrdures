<?php
	header("Access-Control-Allow-Origin: *");
	
	$con = mysqli_connect("localhost", "root", "", "ordures") or die("Impossible de se connecter à la base de données.");
?>
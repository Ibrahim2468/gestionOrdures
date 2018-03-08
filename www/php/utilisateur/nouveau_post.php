<?php
	include "../db.php";

	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$photo = $_POST['photo'];
	$requete = mysqli_query($con, "INSERT INTO `posts` (`latitude_post`,`longitude_post`, `photo_post`, `utilisateur`) VALUES ('$latitude','$longitude','$photo', '1')");
	if($requete)
		echo "success";
	else
		echo "erreur";
 ?>
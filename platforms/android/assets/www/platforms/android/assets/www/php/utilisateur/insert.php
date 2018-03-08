<?php
	include "../db.php";
	if(isset($_POST['insert']))
	{
		$nom = $_POST['nom'];
		$prenom = $_POST['prenom'];
		$adresse = $_POST['adresse'];
		$identifiant = $_POST['identifiant'];
		$pass = $_POST['pass'];
		$requete = mysqli_query($con, "INSERT INTO `utilisateurs` (`nom_utilisateur`,`prenom_utilisateur`, `adresse_utilisateur`, `identifiant_utilisateur`, `password_utilisateur`) VALUES ('$nom','$prenom','$adresse', '$identifiant', '$pass')");
		if($requete)
			echo "success";
		else
			echo "erreur";
	}
 ?>
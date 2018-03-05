$(document).ready(function() {
    $("#connexion").click(function() {
    	var identifiant = $("#identifiant").val();
        var pass = $("#pass").val();

        if ($.trim(identifiant).length > 0 & $.trim(pass).length > 0 ) {
        	var url = "http://192.168.43.117/cordova/GestionOrdure/www/php/utilisateur/connexion.php";
        	$.getJSON(url, function(result) {
        		console.log(result);
	            $.each(result, function(i, field) {
	                var id = field.identifiant_utilisateur;
	                var mdp = field.password_utilisateur;
	                
	                if(id.localeCompare(identifiant) == 0 & mdp.localeCompare(pass) == 0){
	                	window.location.replace("index.html");
	                }
	            });
	            toastr.info('Hi! I am error message.');
        	});
        } else{
        	alert("Veilez remplir tous les champs !!!");
        }

    });
});
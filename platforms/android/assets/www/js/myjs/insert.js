$(document).ready(function() {
    $("#insert").click(function() {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var adresse = $("#adresse").val();
        var identifiant = $("#identifiant").val();
        var pass = $("#pass").val();
        var pass2 = $("#pass2").val();
        var dataString = "nom=" + nom + "&prenom=" + prenom + "&adresse=" + adresse + "&identifiant=" + identifiant + "&pass=" + pass + "&insert=";
        
        if ($.trim(nom).length > 0 & $.trim(prenom).length > 0 & $.trim(adresse).length > 0 & $.trim(identifiant).length > 0 & $.trim(pass).length > 0 & $.trim(pass2).length > 0) {
            if(pass.localeCompare(pass2) == 0){
                $.ajax({
                    type: "POST",
                    url: "http://192.168.43.117/cordova/GestionOrdure/www/php/utilisateur/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function() {
                        $("#insert").val('Connection...');
                    },
                    success: function(data) {
                        if (data == "success") {
                            alert("Compte ajouté avec succes.");
                            $("#insert").val('submit');
                        } else if (data == "erreur") {
                            alert("Erreur !!!");
                            $("#insert").val('submite');
                        } else {
                            alert(data);
                        }
                    }
                });
            } else{
                alert("Les deux mot de passe ne sont pas identiques !!!");
            }
        } else{
            alert("Veillez remplir tous les champs !!!");
        }
        return false;
    });
});

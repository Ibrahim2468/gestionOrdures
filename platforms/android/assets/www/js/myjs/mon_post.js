function nouveau_post()
{
    var dataString = "latitude=" + latitude + "&longitude=" + longitude + "&photo=" + imageee + "&insert=";
    $.ajax({
        type: "GET",
        url: "http://10.157.229.145/cordova/GestionOrdure/www/php/utilisateur/nouveau_post.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            alert("Nous avons " + dataString);
        },
        success: function(data) {
            if (data == "success") {
                alert("Post ajouté avec succes.");
            } else if (data == "erreur") {
                alert("Erreur !!!");
            } else {
                alert(data);
            }
        }
    });
    
    return false;
}

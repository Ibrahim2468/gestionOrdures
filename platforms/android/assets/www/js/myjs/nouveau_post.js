function nouveau_post()
{
    alert("Dans nouveau post");
    alert("Latitude : " + gCordonnees.latitude);
    alert("Longitude : " + gCordonnees.longitude);
    alert("Image : " + gCordonnees.photo);

    postJsonStr = JSON.stringify(gCordonnees);
    let url = "http://10.157.228.83/cordova/GestionOrdure/www/php/utilisateur/nouveau_post.php?data=" + postJsonStr; 
    
    // Debut Chargement
    $.get(url, function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);    

        // Fin chargement
    });
}
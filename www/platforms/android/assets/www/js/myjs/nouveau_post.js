function nouveau_post()
{
    console.log("Dans nouveau post");
    console.log("Latitude : " + gCordonnees.latitude);
    console.log("Longitude : " + gCordonnees.longitude);
    console.log("Image : " + gCordonnees.photo);

    postJsonStr = JSON.stringify(gCordonnees);
    console.log(postJsonStr);
    
    let url = "http://10.157.228.83/cordova/GestionOrdure/www/php/utilisateur/nouveau_post.php?data=" + postJsonStr; 
    
    // Debut Chargement
    $.get(url, function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);    
    });
}
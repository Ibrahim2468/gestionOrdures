function nouveau_post()
{
    
    console.log("Latitude : " + gCordonnees.latitude);
    console.log("Longitude : " + gCordonnees.longitude);
    console.log("Image : " + gCordonnees.photo);

    //postJsonStr = JSON.stringify(gCordonnees);
    //console.log(postJsonStr);
    
    //let url = "http://192.168.43.117/cordova/GestionOrdure/www/php/utilisateur/nouveau_post.php?latitude=" + gCordonnees.latitude + "&longitude=" + gCordonnees.longitude + "&photo=" + gCordonnees.photo ; 
    
    // Debut Chargement
    //$.get(url, function(data, status) {
   //     alert("Data: " + data + "\nStatus: " + status);  
   // });

    var dataString = "latitude=" + gCordonnees.latitude + "&longitude=" + gCordonnees.longitude + "&photo=" + gCordonnees.photo + "&insert=";

    alert("Photo : " + gCordonnees.photo);
    console.log("DateString : " + dataString);
//    alert("Dans nouveau post avec : " + dataString);
    
    $.ajax({
        type: "POST",
        url: "http://192.168.43.117/cordova/GestionOrdure/www/php/utilisateur/nouveau_post.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            alert("Avant insertion");
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
}
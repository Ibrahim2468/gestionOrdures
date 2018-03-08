var getLocation = function()
{
	
	//var options = { timeout: 60000 };
	var optionsLocation = {maximumAge: 60000, timeout:120000, enableHighAccuracy: true };

	navigator.geolocation.getCurrentPosition(onSuccess, onError, optionsLocation);
//	alert("latitude : " + gCordonnees.latitude);

}

function onSuccess(position)
{
	//alert("Yes, get location details..");
	gCordonnees.latitude = position.coords.latitude;
	gCordonnees.longitude = position.coords.longitude;
        console.log ("Fin de onsuccess latitude: " + position.coords.latitude);
}

function onError(error)
{
	alert("Oops, No location details available, Please check GPS is running..");
	switch(error.code)
	{
		case error.PERMISSION_DENIED:
			alert("User did not share geolocation data.");
			document.getElementById('locationDetails').innerHTML="User did not share geolocation data.";
		break;

		case error.POSITION_UNAVAILABLE: 
			alert("Could not detect current position.");
			document.getElementById('locationDetails').innerHTML="Could not detect current position.";
		break;

		case error.TIMEOUT: 
			alert("Retrieving position timedout,Please try again");
			document.getElementById('locationDetails').innerHTML="Retrieving position timedout,Please try again";
		break;

		default: 
			alert("unknown error");
		break;
	}
}
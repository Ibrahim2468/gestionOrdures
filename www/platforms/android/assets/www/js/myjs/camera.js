var pictureSource;
var destinationType;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData)
{
	getLocation();
	var smallImage = document.getElementById('smallImage');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64," + imageData;

}

function onPhotoURISuccess(imageURI)
{
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
}

function capturePhoto()
{
	navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality:50,
		destinationType: destinationType.DATA_URL
	});
}

function getPhoto(source)
{
	navigator.camera.getPicture(onPhotoURISuccess,onFail,{
		quality:50,
		destinationType: destinationType.FILE_URI,
		sourceType: source
	});
}

function onFail(message)
{
	alert('Failed because: ' + message);
}

//var getLocation = function()
//{
//
//	document.addEventListener("deviceready",onDeviceReady,false);
//
//	function onDeviceReady(){
//		alert("Device Ready");
//		var options = { timeout: 60000 };
//		var optionsLocation = {maximumAge: 60000,timeout:120000, enableHighAccuracy: true };
//
//		navigator.geolocation.getCurrentPosition(onSuccess,onError,optionsLocation);
//	}
//}

function onSuccess(position)
{
	alert("Yes, get location details..");

	var str = 'Latitude: ' + position.coords.latitude + 'Longitude: ' + position.coords.longitude ;
	alert(str);

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
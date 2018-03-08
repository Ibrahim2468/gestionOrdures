var pictureSource;
var destinationType;

var gCordonnees = {
	"latitude": 0,
	"longitude": 0,
	"photo": "" //Base64 image
};

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
	gCordonnees.photo = imageData;

	alert("appel de nouveau_post");
	nouveau_post();

}

function onPhotoURISuccess(imageURI)
{
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
}

async function capturePhoto()
{
	alert("appel de capture");
	navigator.camera.getPicture(onPhotoDataSuccess, onFail ,{
		quality: 50,
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
	nouveau_post();
}

function onFail(message)
{
	alert('Failed because: ' + message);
}

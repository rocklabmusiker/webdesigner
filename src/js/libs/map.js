

var map;
var egglabs = new google.maps.LatLng(54.480176, 9.833718);
var mapCoordinates = new google.maps.LatLng(54.480176, 9.833718);


var markers = [];
var image = new google.maps.MarkerImage(
    '../images/desktop/goal-map.png', // иконка
    new google.maps.Size(84,56), // размеры иконок
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false
      }));
      
}

function initialize() {
  var mapOptions = {
	backgroundColor: "#ffffff", // цвет фона
    zoom: 16, // масштаб
	disableDefaultUI: true, // прячет элементы на карте
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	//----------- стили ----------
	styles: [
			  {
			    "featureType": "landscape.natural",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#FCF4DF" }// цвет земли
			    ]
			  },
			  {
				    "featureType": "landscape.man_made",
				    "stylers": [
				      { "color": "#ffffff" },
				      { "visibility": "off" }
				    ]
			  },
			  {
				    "featureType": "water",
				    "stylers": [
				       { "color": "#d6eae3" },// цвет для воды
				      { "saturation": 0 }
				    ]
			  },
			  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      { "color": "#ffffff" } // цвет больших дорог
				    ]
			  }
			 ,{
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      { "visibility": "off" }
				    ]
			  }
				,{
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#333333" } // цвет текста
				    ]
				  }
				
				,{
				    "featureType": "road.local",
				    "stylers": [
				      { "color": "#dedede" } // цвет мальньких дорог
				    ]
				  }
				,{
				    "featureType": "road.local",
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#666666" }
				    ]
				  }
				,{
				    "featureType": "transit.station.bus",
				    "stylers": [
				      { "saturation": -57 }
				    ]
				  }
				,{
				    "featureType": "road.highway",
				    "elementType": "labels.icon",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  },{
				    "featureType": "poi",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  }
			
			]
    //------------конец --------------
  };
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker(); // вызов функции
 
}
google.maps.event.addDomListener(window, 'load', initialize);

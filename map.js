// create an array of markers 
var markers = [
    {
      coords:{lat:59.36148, lng:18.05754},
      content: '<h1>Stockholm Universitet<h1>'
    }, 
    {
      coords:{lat:62.393584, lng:17.283400 },
      content: '<a href="https://www.miun.se/">Mittuniversitet Sundsvall</a>'
    },
    {
      coords:{lat:63.178906, lng:14.659791 },
      content: '<h1>Mittuniversitet Östersund<h1>'
    },  
    {
      coords:{lat:59.850927, lng:17.630117 },
      content: '<h1>Uppsala universitet<h1>'
    },
    {
      coords:{lat:59.222264, lng:17.938505},
      content: '<h1>KTH Flemingsberg<h1>'
    },  
    {
      coords:{lat:59.404953, lng:17.950070},
      content: '<h1>KTH Kista<h1>'
    }, 
    {
      coords:{lat:59.34986, lng:18.07022},
      content: '<h1>Kungliga ekniska högskolan<h1>'
    }, 
    {
      coords:{lat:55.711957, lng:13.203690},
      content: '<h1>Lunds Universitet<h1>'
    }, 
    {
      coords:{lat:57.698155, lng:11.971867 },
      content: '<h1>Göteborg Universitet<h1>'
    },
    {
      coords:{lat:63.82019, lng:20.30562},
      content: '<h1>Umeå Universitet<h1>'
    },  
    {
      coords:{lat:55.609212, lng:12.994420 },
      content: '<h1>Malmö Universitet<h1>'
    },
    {
      coords:{lat:59.25468, lng:15.24935},
      content: '<h1>Örebro Universitet<h1>'
    },  
    {
      coords:{lat:58.39775, lng:15.57580},
      content: '<h1>Linköpnings Univeristet <h1>'
    },
    {
      coords:{lat:65.61803, lng:22.14010},
      content: '<h1>Luleå tekniska Universitet<h1>'
    }, 
    {
      coords:{lat:56.85447, lng:14.83006},
      content: '<h1>LinneUniversitet<h1>'
    },
    {
      coords:{lat:59.34804, lng:18.02359},
      content: '<h1>Karolinska institutet<h1>'
    },  
    {
      coords:{lat:59.81489, lng:17.66268},
      content: '<h1>Sveriges lantbruksuniversitet<h1>'
    },
    {
      coords:{lat:57.68997, lng:11.97419},
      content: '<h3>Charlmers tekniska universitet<h3>'
    },  
    {
      coords:{lat:59.3934177, lng:18.05742},
      content: '<h3>Handelshögskolan i stockholm<h3>'
    },
    {
      coords:{lat:56.180734, lng:15.591196},
      content: '<h3>Blekinge Tekniska Högskolan<h3>'
    },
    {
      coords:{lat:59.34919, lng:18.06947},
      content: '<h3>Försvarshögskolan stockholm<h3>'
    },
    {
      coords:{lat:59.34660, lng:18.08113},
      content: '<h3>Gymnastik-och idrottshögskolan<h3>'
    },
    {
      coords:{lat:59.32927, lng:18.01958},
      content: '<h3>Lärarhögskolan<h3>'
    },
    {
      coords:{lat:59.34484, lng:18.08227},
      content: '<h3>Kungliga Musikhögskolan<h3>'
    },
    {
      coords:{lat:59.32437, lng:18.08316},
      content: '<h3>Kungliga Konsthögskolan<h3>'
    },
    {
      coords:{lat:59.32437, lng:18.08316},
      content: '<h3>Röda korsets högskolan<h3>'
    },
    {
      coords:{lat:59.85619, lng:17.63815},
      content: '<h3>Newmaninstitutet<h3>'
    },
];

    function initMap() {
        var options = {
        zoom:3,
        center: {lat:60.128161, lng:18.643501}
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
            
        // loop through markers
        for(var i=0;i<markers.length;i++){
            addMarker(markers[i]);
        }   

        // add marker function 
        function addMarker (props){
            var marker = new google.maps.Marker ({ position:props.coords, map:map,});   
                if(props.iconImage){
                    marker.setIcon(propsiconImage);
                }

                if(props.content){
                    var infoWindow = new google.maps.InfoWindow({content:props.content});
                    marker.addListener('click', function() {
                        infoWindow.open(map, marker);
                    });
                }
        }
    }   
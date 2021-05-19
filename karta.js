// create an array of markers 
var markers = [
    {
      coords:{lat:59.36148, lng:18.05754},
      content: '<a href="https://www.su.se/">Stockholm Universitet</a>'
    }, 
    {
      coords:{lat:62.393584, lng:17.283400 },
      content: '<a href="https://www.miun.se/">Mittuniversitet Sundsvall</a>'
    },
    {
      coords:{lat:63.178906, lng:14.659791 },
      content: '<a href="https://www.miun.se/mot-mittuniversitetet/universitetet/campusorter/Ostersund//">Mittuniversitet Östersund</a>'
    },  
    {
      coords:{lat:59.850927, lng:17.630117 },
      content: '<a href="https://www.uu.se/">Uppsala universitet</a>'
    },
    {
      coords:{lat:59.222264, lng:17.938505},
      content: '<a href="https://www.kth.se/om/kontakt/campus/kth-flemingsberg-1.640319/">KTH Flemingsberg</a>'
    },  
    {
      coords:{lat:59.404953, lng:17.950070},
      content: '<a href="https://www.kth.se/om/kontakt/campus/kth-kista-1.640358/">KTH Kista</a>'
    }, 
    {
      coords:{lat:59.34986, lng:18.07022},
      content: '<a href="https://www.kth.se/">Kungliga tekniska högskolan</a>'
    }, 
    {
      coords:{lat:55.711957, lng:13.203690},
      content: '<a href="https://www.lu.se/">Lunds Universitet</a>'
    }, 
    {
      coords:{lat:57.698155, lng:11.971867 },
      content: '<a href="https://www.gu.se/">Göteborg Universitet</a>'
    },
    {
      coords:{lat:63.82019, lng:20.30562},
      content: '<a href="https://www.umu.se/">Umeå Universitet</a>'
    },  
    {
      coords:{lat:55.609212, lng:12.994420 },
      content: '<a href="https://www.mau.se/">Malmö Universitet</a>'
    },
    {
      coords:{lat:59.25468, lng:15.24935},
      content: '<a href="https://www.oru.se/">Örebro Universitet</a>'
    },  
    {
      coords:{lat:58.39775, lng:15.57580},
      content: '<a href="https://www.liu.se/">Linköpnings Univeristet </a>'
    },
    {
      coords:{lat:65.61803, lng:22.14010},
      content: '<a href="https://www.ltu.se/">Luleå tekniska Universitet</a>'
    }, 
    {
      coords:{lat:56.85447, lng:14.83006},
      content: '<a href="https://lnu.se/">LinneUniversitet</a>'
    },
    {
      coords:{lat:59.34804, lng:18.02359},
      content: '<a href="https://ki.se/">Karolinska institutet</a>'
    },  
    {
      coords:{lat:59.81489, lng:17.66268},
      content: '<a href="https://www.slu.se/">Sveriges lantbruksuniversitet</a>'
    },
    {
      coords:{lat:57.68997, lng:11.97419},
      content: '<a href="https://www.chalmers.se/">Charlmers tekniska universitet</a>'
    },  
    {
      coords:{lat:59.3934177, lng:18.05742},
      content: '<a href="https://www.hhs.se/">Handelshögskolan i stockholm</a>'
    },
    {
      coords:{lat:56.180734, lng:15.591196},
      content: '<a href="https://www.bth.se/">Blekinge Tekniska Högskolan</a>'
    },
    {
      coords:{lat:59.34919, lng:18.06947},
      content: '<a href="https://www.fhs.se/">Försvarshögskolan stockholm</a>'
    },
    {
      coords:{lat:59.34660, lng:18.08113},
      content: '<a href="https://www.gih.se/">Gymnastik-och idrottshögskolan</a>'
    },
    {
      coords:{lat:59.32927, lng:18.01958},
      content: '<a href="https://www.su.se/">Lärarhögskolan</a>'
    },
    {
      coords:{lat:59.34484, lng:18.08227},
      content: '<a href="https://www.kmh.se/">Kungliga Musikhögskolan</a>'
    },
    {
      coords:{lat:59.32437, lng:18.08316},
      content: '<a href="https://kkh.se/">Kungliga Konsthögskolan</a>'
    },
    {
      coords:{lat:59.32437, lng:18.08316},
      content: '<a href="https://www.rkh.se/">Röda korsets högskolan</a>'
    },
    {
      coords:{lat:59.85619, lng:17.63815},
      content: '<a href="https://newman.se/">Newmaninstitutet</a>'
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
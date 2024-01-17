function officemap() {
        var uluru = {lat: 43.6612858, lng: -79.3868145};
        var map = new google.maps.Map(document.getElementById('officemap'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
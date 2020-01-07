import {Injectable, NgZone} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';


declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  geocoder: any;

  constructor(
    public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper
  ) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  findLocation(address) {
    return new Promise((resolve, reject) => {
      if (!this.geocoder) {
        this.geocoder = new google.maps.Geocoder();
      }
      this.geocoder.geocode({
        address
      }, (results, status) => {
        console.log(results);
        if (status === google.maps.GeocoderStatus.OK) {
          // decompose the result
          resolve({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
            formatted_address: results[0].formatted_address,
            address_components: results[0].address_components
          });
        } else {
          alert('Sorry, this search produced no results.');
          resolve([]);
        }
      });
    });
  }
}

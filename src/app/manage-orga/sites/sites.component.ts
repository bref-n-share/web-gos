import {Component, Input, OnInit} from '@angular/core';
import {Site} from '../../models/Site';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  @Input() sites: Array<Site>;

  mapInfo = {
    latitude: 46.5501107,
    longitude: 3.242053,
    zoom: 5
  };

  selectedSite: Site = null;

  constructor() { }

  ngOnInit() {
  }

  updateSelectedSite(site: Site) {
    this.selectedSite = site;
    if (!site) {
      this.mapInfo = {
        latitude: 46.5501107,
        longitude: 3.242053,
        zoom: 5
      };
      return;
    }
    this.mapInfo.latitude = this.coordToFloat(site.latitude);
    this.mapInfo.longitude = this.coordToFloat(site.longitude);
    this.mapInfo.zoom = 17;
  }

  coordToFloat(coord) {
    return parseFloat(coord);
  }

}

import { Component, OnInit } from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {BecomeMember, CreateSite} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';

@Component({
  selector: 'app-site-creator',
  templateUrl: './site-creator.component.html',
  styleUrls: ['./site-creator.component.css']
})
export class SiteCreatorComponent implements OnInit {

  constructor(
    private mapsService: MapsService,
    private commandsService: SignupCommandsService
  ) { }

  associations = [
    {
      id: 1,
      name: 'Emmaus'
    },
    {
      id: 2,
      name: 'Make A Wish'
    },
    {
      id: 3,
      name: 'Autre truc'
    }
  ];

  siteCreatorModel = {
    name: '',
    address: '',
    association: null,
    address_components: []
  };

  marker = null;
  mapData = {
    lat: 46.5601757,
    lng: 4.101169,
    zoom: 4
  };

  ngOnInit() {
  }

  pinpoint() {
    this.mapsService.findLocation(this.siteCreatorModel.address).then(res => {
      this.siteCreatorModel.address_components = res['address_components'];
      this.siteCreatorModel.address = res['formatted_address'];
      this.mapData.lat = res['lat'];
      this.mapData.lng = res['lng'];
      this.mapData.zoom = 17;
      this.mapData.zoom = 17;
      this.marker = {
        lat: res['lat'],
        lng: res['lng']
      };
    });
  }

  validate() {
    const site = {...this.siteCreatorModel};
    site['lat'] = this.marker.lat;
    site['lng'] = this.marker.lng;
    const action: CreateSite = {site};
    this.commandsService.commandController.next(action);
  }

}

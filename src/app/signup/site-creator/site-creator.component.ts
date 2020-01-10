import { Component, OnInit } from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {BecomeMember, CreateSite} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';
import {StructureService} from '../../services/structure.service';
import {Structure} from '../../models/Structure';
import {AccountApiService} from '../../services/account-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-site-creator',
  templateUrl: './site-creator.component.html',
  styleUrls: ['./site-creator.component.css']
})
export class SiteCreatorComponent implements OnInit {
  creaSite: FormGroup;

  constructor(
    private mapsService: MapsService,
    private commandsService: SignupCommandsService,
    private structureService: StructureService,
    private accountApiService: AccountApiService,
    private formBuilder: FormBuilder,
  ) { }

  organizations: Structure[] = [];

  siteCreatorModel = {
    name: '',
    address: '',
    organization: null,
    address_components: []
  };

  marker = null;
  mapData = {
    lat: 46.5601757,
    lng: 4.101169,
    zoom: 4
  };

  ngOnInit() {
    this.creaSite = this.formBuilder.group({
      name: ['', Validators.minLength(2)],
      address: ['', Validators.required],
      organization: ['', Validators.required],
    });

    this.structureService.getStructures().subscribe((structures) => {
      this.organizations = structures.filter((s) => s.type === 'organization');
    });
  }

  isLoading(): boolean {
    return this.accountApiService.loading;
  }

  pinpoint() {
    this.mapsService.findLocation(this.creaSite.value.address).then(res => {
      this.siteCreatorModel.address_components = res['address_components'];
      this.creaSite.controls.address.setValue(res['formatted_address']);
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

  validate(data) {
    if (data.status === 'INVALID') {
      return;
    }
    this.siteCreatorModel.name = data.value.name;
    this.siteCreatorModel.address = data.value.address;
    this.siteCreatorModel.organization = data.value.organization;
    const site = {...this.siteCreatorModel};
    site['lat'] = this.marker.lat;
    site['lng'] = this.marker.lng;
    const action: CreateSite = {site};
    this.commandsService.commandController.next(action);
  }

}

import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {MatDialog} from '@angular/material';
import {SiteDetailsComponent} from './site-details/site-details.component';
import {MapsService} from '../services/maps.service';
import {StructureService} from '../services/structure.service';
import {Site} from '../models/Site';
import {User} from '../models/User';

@Component({
  selector: 'app-orga',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private mapsService: MapsService,
    private structureService: StructureService
  ) { }

  site: Site;
  user: User;
  latitude = 0;
  longitude = 0;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.structureService.getSite(this.user.structure.id).subscribe((ret: Site) => {
      this.site = ret;
      this.latitude = parseFloat(ret.latitude);
      this.longitude = parseFloat(ret.longitude);
    });
  }

  onMarkerClick() {
    const ref = this.dialog.open(SiteDetailsComponent, {
      data: {...this.site}
    });

    ref.afterClosed().subscribe((site: Site) => {
      if (site) {
        if (JSON.stringify(site) !== JSON.stringify(this.site)) {
          this.mapsService.findLocation(site.address).then((result) => {
            this.site.longitude = result['lng'];
            this.site.latitude = result['lat'];
            this.site.address = result['formatted_address'];
            this.latitude = result['lat'];
            this.longitude = result['lng'];
            this.structureService.updateSite(this.site.id,
              {longitude: this.site.longitude.toString(), latitude: this.site.latitude.toString(), address: this.site.address,
                      phone: site.phone.toString(), description: site.description.toString()})
              .subscribe((ret: Site) => {
                this.site = site;
              }, error => {
                console.log(error);
              });
          });
        }
      }
    });
  }

}

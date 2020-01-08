import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {MatDialog} from '@angular/material';
import {SiteDetailsComponent} from './site-details/site-details.component';
import {MapsService} from '../services/maps.service';

@Component({
  selector: 'app-orga',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private mapsService: MapsService
  ) { }

  orga = {
    lat: 45.751785,
    lng: 4.849233,
    name: 'Emmaüs Créqui Lyon',
    tel: '0987654321',
    address: '283 Rue de Créqui, 69007 Lyon'
  };

  ngOnInit() {
  }

  onMarkerClick() {
    const ref = this.dialog.open(SiteDetailsComponent, {
      data: {...this.orga}
    });

    ref.afterClosed().subscribe(orga => {
      if (orga) {
        if (JSON.stringify(orga) !== JSON.stringify(this.orga)) {
          this.mapsService.findLocation(orga.address).then((result) => {
            console.log('result', result);
            this.orga.lng = result['lng'];
            this.orga.lat = result['lat'];
            this.orga.address = result['formatted_address'];
          });
        }
      }
    });
  }

}
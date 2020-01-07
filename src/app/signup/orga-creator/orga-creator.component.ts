import {Component, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {CreateOrganization, CreateSite} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';
import {MatDialog} from '@angular/material';
import {ConfirmAddressComponent} from '../../dialogs/confirm-address/confirm-address.component';

@Component({
  selector: 'app-orga-creator',
  templateUrl: './orga-creator.component.html',
  styleUrls: ['./orga-creator.component.css']
})
export class OrgaCreatorComponent implements OnInit {

  constructor(
    private mapsService: MapsService,
    private commandsService: SignupCommandsService,
    private dialog: MatDialog
  ) {
  }

  modelOrga = {
    name: '',
    address: '',
    address_components: []
  };

  ngOnInit() {
  }


  validate() {
    this.mapsService.findLocation(this.modelOrga.address).then(res => {
      if (res['formatted_address'] !== this.modelOrga.address) {
        console.log('found this address', res['formatted_address']);
        this.dialog.open(ConfirmAddressComponent, {
          data: res['formatted_address'],
          width: '300px'
        }).afterClosed().subscribe(isValid => {
          if (isValid) {
            this.modelOrga.address = res['formatted_address'];
            this.modelOrga.address_components = res['address_components'];
            const action: CreateOrganization = {organization: this.modelOrga};
            this.commandsService.commandController.next(action);
          }
        });
      } else {
        const action: CreateOrganization = {organization: this.modelOrga};
        this.commandsService.commandController.next(action);
      }
    });
  }

}

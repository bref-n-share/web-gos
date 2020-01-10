import {Component, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps.service';
import {CreateOrganization, CreateSite} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';
import {MatDialog} from '@angular/material';
import {ConfirmAddressComponent} from '../../dialogs/confirm-address/confirm-address.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountApiService} from '../../services/account-api.service';

@Component({
  selector: 'app-orga-creator',
  templateUrl: './orga-creator.component.html',
  styleUrls: ['./orga-creator.component.css']
})
export class OrgaCreatorComponent implements OnInit {

  creaOrga: FormGroup;

  constructor(
    private mapsService: MapsService,
    private commandsService: SignupCommandsService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private accountApiService: AccountApiService,
  ) {
  }

  modelOrga = {
    name: '',
    address: '',
    address_components: [],
    latitude: '',
    longitude: ''
  };

  ngOnInit() {
    this.creaOrga = this.formBuilder.group({
      name: ['', Validators.minLength(2)],
      address: ['', Validators.required],
    });
  }

  isLoading(): boolean {
    return this.accountApiService.loading;
  }

  validate(data) {
    if (data.status === 'INVALID') {
      return;
    }
    this.modelOrga.name = data.value.name;
    this.modelOrga.address = data.value.address;
    this.mapsService.findLocation(this.modelOrga.address).then(res => {
      if (res['formatted_address'] !== this.modelOrga.address) {
        this.dialog.open(ConfirmAddressComponent, {
          data: res['formatted_address'],
          width: '300px'
        }).afterClosed().subscribe(isValid => {
          if (isValid) {
            this.modelOrga.address = res['formatted_address'];
            this.modelOrga.address_components = res['address_components'];
            this.modelOrga.latitude = res['latitude'];
            this.modelOrga.longitude = res['longitude'];
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

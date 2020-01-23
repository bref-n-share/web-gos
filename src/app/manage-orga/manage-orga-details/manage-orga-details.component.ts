import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../../models/organization';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-orga-details',
  templateUrl: './manage-orga-details.component.html',
  styleUrls: ['./manage-orga-details.component.css']
})
export class ManageOrgaDetailsComponent implements OnInit {

  @Input() organization: Organization;

  constructor(
    private fb: FormBuilder
  ) {
  }

  formOrga: FormGroup;

  ngOnInit() {
    console.log('orga', this.organization);
    this.formOrga = this.fb.group({
      name: {value: this.organization.name, disabled: true},
      address: {value: this.organization.address, disabled: true},
      phone: {value: this.organization.phone, disabled: true},
      description: {value: this.organization.description, disabled: true},
    });
  }

}

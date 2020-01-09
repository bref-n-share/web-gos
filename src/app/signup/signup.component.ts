import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupCommandsService} from '../services/signup-commands.service';
import {MatSnackBar, MatStepper} from '@angular/material';
import {AccountApiService} from '../services/account-api.service';
import {User} from '../models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  @ViewChild('stepper', null) private signupStepper: MatStepper;

  lastStepMessage = '';

  lastStepMessageList = {
    association: 'Merci de votre inscription. Un message a été envoyé à l\'administrateur de {{name}} qui l\'évaluera et ' +
      'pourra l\'accepter. Vous receverez un mail de confirmation une fois votre demande validée.',
    site: 'Merci pour votre inscription. Un administrateur de {{name}} va recevoir et traiter votre demande d\'ajout de site.',
    organization: 'Merci, c\'est bon pour nous.'
  };

  constructor(
    private formBuilder: FormBuilder,
    private commandsService: SignupCommandsService,
    private accountApiService: AccountApiService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.signup = this.formBuilder.group({
      lastname: ['', Validators.minLength(2)],
      firstname: ['', Validators.minLength(2)],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });

    this.commandsService.commandController.subscribe(value => {
      if (value) {
        this.lastStepMessage = this.lastStepMessageList[Object.keys(value)[0]].replace('{{name}}',
          value[Object.keys(value)[0]].name);
        this.createAccount(value).then((toSend: User) => {
          this.accountApiService.createUser(toSend).subscribe(ret => {
            this.signupStepper.next();
            this.snackBar.open('L\'utilisateur a été créé', 'OK', {
              verticalPosition: 'top',
              horizontalPosition: 'center',
              duration: 1000
            });
          }, error => {
            this.snackBar.open('Erreur à la création : ' + error.error, 'OK', {
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          });
        });
      }
    });
  }

  createAccount(action) {
    return new Promise(resolve => {
      let toSend = {...this.signup.getRawValue()};
      switch (Object.keys(action)[0]) {
        case 'association':
          toSend.structure = action.association.id;
          break;
        case 'site':
          toSend = this.fillWithAddress(toSend, action.site);
          toSend.structure.type = Object.keys(action)[0];
          break;
        case 'organization':
          toSend = this.fillWithAddress(toSend, action.organization);
          toSend.structure.type = Object.keys(action)[0];
          break;
      }
      resolve(toSend);
    });
  }

  fillWithAddress(toSend, assocObject) {
    toSend.structure = {
      name: assocObject.name,
      address: assocObject.address,
      postalCode: '',
      city: '',
      type: ''
    };
    if (assocObject.lng && assocObject.lat) {
      toSend.structure.longitude = assocObject.lng.toString();
      toSend.structure.latitude = assocObject.lat.toString();
    }
    const postCode = assocObject.address_components.find(a => a.types.indexOf('postal_code') > -1);
    const city = assocObject.address_components.find(a => a.types.indexOf('locality') > -1);
    toSend.structure.postalCode = postCode ? postCode.long_name : 'null';
    toSend.structure.city = city ? city.long_name : 'null';
    return toSend;
  }

}

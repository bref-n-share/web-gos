import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupCommandsService} from '../services/signup-commands.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commandsService: SignupCommandsService
  ) { }

  ngOnInit() {
    this.signup = this.formBuilder.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.commandsService.commandController.subscribe(value => {
      if (value) {
        console.log('command received', value);
      }
    });
  }

  createAccount() {
    console.log(this.signup.getRawValue());
  }



}

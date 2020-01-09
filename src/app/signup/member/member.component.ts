import { Component, OnInit } from '@angular/core';
import {BecomeMember} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountApiService} from '../../services/account-api.service';
import {Structure} from '../../models/Structure';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private commandsService: SignupCommandsService,
    private formBuilder: FormBuilder,
    private accountApiService: AccountApiService
  ) { }

  joinAsso: FormGroup;
  site: Structure[] = [];

  ngOnInit() {
    this.joinAsso = this.formBuilder.group({
      siteForm: ['', Validators.required],
    });
    this.accountApiService.getStructures().subscribe((result: Structure[]) => {
        this.site = result.filter(r => r.type === 'site');
    });
  }

  validate(data) {
    const action: BecomeMember = {association: data.value.siteForm};
    this.commandsService.commandController.next(action);
  }

}

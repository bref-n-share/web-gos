import { Component, OnInit } from '@angular/core';
import {BecomeMember} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountApiService} from '../../services/account-api.service';
import {Structure} from '../../models/Structure';
import {StructureService} from '../../services/structure.service';
import {isNull} from 'util';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private commandsService: SignupCommandsService,
    private formBuilder: FormBuilder,
    private accountApiService: AccountApiService,
    private structureService: StructureService
  ) { }

  joinAsso: FormGroup;
  site: Structure[] = [];

  isLoading(): boolean {
    return this.accountApiService.loading;
  }

  ngOnInit() {
    this.joinAsso = this.formBuilder.group({
      siteForm: ['', Validators.required],
    });
    this.structureService.getStructures().subscribe((result: Structure[]) => {
        this.site = result.filter(r => r.type === 'site');
    });
  }

  validate(data) {
    const action: BecomeMember = {membership: data.value.siteForm};
    this.commandsService.commandController.next(action);
  }

}

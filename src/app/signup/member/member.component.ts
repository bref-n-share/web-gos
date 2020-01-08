import { Component, OnInit } from '@angular/core';
import {BecomeMember} from '../../models/commands/signup';
import {SignupCommandsService} from '../../services/signup-commands.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private commandsService: SignupCommandsService
  ) { }

  memberModel: object = null;

  associations = [
    {
      id: 1,
      name: 'Emmaus'
    },
    {
      id: 2,
      name: 'Make A Wish'
    },
    {
      id: 3,
      name: 'Autre truc'
    }
  ];

  ngOnInit() {
  }

  validate() {
    const action: BecomeMember = {association: this.memberModel};
    this.commandsService.commandController.next(action);
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {StructureService} from '../services/structure.service';
import {Site} from '../models/Site';
import {Organization} from '../models/organization';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-orga',
  templateUrl: './manage-orga.component.html',
  styleUrls: ['./manage-orga.component.css']
})
export class ManageOrgaComponent implements OnInit {

  constructor(
    private userService: UserService,
    private structureService: StructureService,
    private router: Router,
  ) { }

  organization: Organization = null;
  sites: Site[] = [];

  ngOnInit() {
    if (this.userService.user.structure.type === 'organization') {
      this.structureService.getFullStructure(this.userService.user.structure.id).subscribe((orga: Organization) => {
        this.organization = orga;
        this.sites = orga.sites;
      });
    } else {
      alert('Vous n\'êtes pas authorisé à accéder à cette page.');
      this.router.navigate(['']);
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Demand} from '../../models/Demand';
import {Router} from '@angular/router';
import {SocialService} from '../../services/social.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(
    private router: Router,
    private socialService: SocialService,
    private snackBar: MatSnackBar
  ) { }

  buttonsLoading = {
    twitter: false,
    facebook: false,
    gos: false,
  };

  @Input() demand: Demand;

  ngOnInit() {
  }

  isLoading() {
    return Object.values(this.buttonsLoading).findIndex(b => b === true) > -1;
  }

  editDemand(demand) {
    const url = '/demand-form/' + demand.id;
    this.router.navigate([url]);
  }

  publish(channel, event) {
    console.log('event', event);
    this.buttonsLoading[channel] = true;
    this.socialService.publish(channel, this.demand.id).subscribe(result => {
      console.log('result', result);
      this.buttonsLoading[channel] = false;
      this.snackBar.open('Publié', null, {
        duration: 2000,
      });
    });
  }

}

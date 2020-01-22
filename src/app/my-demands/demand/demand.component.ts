import {Component, Input, OnInit} from '@angular/core';
import {Demand} from '../../models/Demand';
import {Router} from '@angular/router';
import {SocialService} from '../../services/social.service';
import {MatSnackBar} from '@angular/material';
import {NotifyService} from '../../services/notify.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(
    private router: Router,
    private socialService: SocialService,
    private snackBar: MatSnackBar,
    private notifyService: NotifyService
  ) { }

  buttonsLoading = {
    twitter: false,
    facebook: false,
    gos: false,
    mobile: false,
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

  notify() {
    this.buttonsLoading.mobile = true;
    this.notifyService.notify({}, this.demand.id).subscribe(value => {
      console.log('value returned', value);
      this.snackBar.open('Demande notifié. La notification restera 3 jours', null, {duration: 2000});
      this.buttonsLoading.mobile = false;
    }, error => {
      console.error('error', error);
      this.snackBar.open('Erreur lors de l\'envoi : ' + error.statusText, null, {duration: 2000});
      this.buttonsLoading.mobile = false;
    });
  }

}

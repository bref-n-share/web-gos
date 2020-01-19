import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DemandsService} from '../services/demands.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.css']
})
export class DemandFormComponent implements OnInit {

  createDemand: FormGroup;

  categories = [
    {
      id: '7993dee3-35a5-4e92-9952-5917cd9265c7',
      title: 'alimentaire'
    },
    {
      id: '6369bfc1-b6e5-4859-afe0-96c34be058bb',
      title: 'vêtements'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private demandsService: DemandsService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createDemand = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      requestedQuantity: ['', Validators.required],
      category: ['', Validators.required],
      site: [this.userService.user.structure.id]
    });
    this.route.paramMap.subscribe(params => {
      console.log('request id', params.get('requestId'));
    });
  }

  submit() {
    const payload = this.createDemand.getRawValue();
    this.demandsService.createRequest(payload).subscribe((res) => {
      console.log('res', res);
      this.router.navigate(['/demands']);
    }, error => {
      console.error('error', error);
    });
  }
}

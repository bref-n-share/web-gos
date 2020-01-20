import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DemandsService} from '../services/demands.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../models/Category';
import {Demand} from '../models/Demand';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.css']
})
export class DemandFormComponent implements OnInit {

  createDemand: FormGroup;
  loading = true;
  requestId = null;

  categories = [];

  constructor(
    private formBuilder: FormBuilder,
    private demandsService: DemandsService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.createDemand = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      requestedQuantity: ['', Validators.required],
      category: ['', Validators.required],
      site: [this.userService.user.structure.id]
    });
    this.getCategories().subscribe(() => {
      this.route.paramMap.subscribe(params => {
        this.requestId = params.get('requestId');
        if (this.requestId) {
          this.demandsService.getRequest(this.requestId).subscribe((request: Demand) => {
            this.createDemand.controls['title'].setValue(request.title);
            this.createDemand.controls['description'].setValue(request.description);
            this.createDemand.controls['requestedQuantity'].setValue(request.requestedQuantity);
            this.createDemand.controls['category'].setValue(request.category.id);
            this.createDemand.controls['site'].setValue(this.userService.user.structure.id);
            this.loading = false;
          });
        } else {
          this.loading = false;
        }
      });
    });
  }

  getCategories(): Observable<any> {
    return this.categoriesService.getCategories().pipe(map((categories: Category[]) => {
      this.categories = categories;
      return;
    }));
  }

  submit(event) {
    event.preventDefault();
    this.loading = true;
    const payload = this.createDemand.getRawValue();
    if (this.requestId) {
      this.create(payload);
    } else {
      this.update(payload);
    }
  }

  create(payload) {
    this.demandsService.createRequest(payload).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/demands']);
    }, error => {
      console.error('error', error);
      this.loading = false;
    });
  }

  update(payload) {
    this.demandsService.editRequest(payload, this.requestId).subscribe(() => {
      this.loading = false;
      // this.router.navigate(['/demands']);
      this.snackBar.open('Updated');
    }, error => {
      console.error('error', error);
      this.loading = false;
    });
  }
}

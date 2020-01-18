import {Component, Input, OnInit} from '@angular/core';
import {DemandsService} from '../../services/demands.service';
import {CategoriesService} from '../../services/categories.service';
import {Category} from '../../models/Category';

@Component({
  selector: 'app-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(
    private demandsService: DemandsService,
    private categoriesService: CategoriesService
  ) {
  }

  modelsFilter = {};

  categories: Array<Category> = [];

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories: Array<Category>) => {
      this.categories = categories;
      categories.forEach(c => {
        this.modelsFilter[c.id] = false;
      });
    });
  }

  modelChanged() {
    const allDemands = [...this.demandsService.allDemands];
    const filterActivated = Object.values(this.modelsFilter).findIndex(v => v === true);
    if (filterActivated === -1) {
      return this.demandsService.demandsBS.next(allDemands);
    }
    const demandsToPush = [];
    this.demandsService.demandsBS.next([]);
    Object.keys(this.modelsFilter).forEach(catId => {
      if (this.modelsFilter[catId]) {
        const tmp = allDemands.filter(d => d.category.id === catId);
        tmp.forEach(d => {
          demandsToPush.push(d);
        });
      }
    });
    this.demandsService.demandsBS.next(demandsToPush);
  }

}

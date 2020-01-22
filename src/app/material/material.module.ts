import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule, MatDialogModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule
];


// @ts-ignore
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }

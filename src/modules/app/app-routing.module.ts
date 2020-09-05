import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { PreProjectionComponent } from './components/pre-projection/pre-projection.component';
import { DataClasificationComponent } from './components/data-clasification/data-clasification.component';
import { DataAugmentationComponent } from './components/data-augmentation/data-augmentation.component';


const routes: Routes = 
[
  { path: 'data-collection', component: DataCollectionComponent },
  { path: 'pre-processing', component: PreProjectionComponent },
  { path: 'data-clasification', component: DataClasificationComponent },
  { path: 'data-augmentation', component: DataAugmentationComponent },
  { path: '', redirectTo: 'data-collection', pathMatch: 'full' },
  { path: '**', redirectTo: 'data-collection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

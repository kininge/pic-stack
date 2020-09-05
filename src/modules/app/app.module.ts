import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PicStackComponent } from './components/pic-stack/pic-stack.component';
import { FootComponent } from './components/foot/foot.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { PreProjectionComponent } from './components/pre-projection/pre-projection.component';
import { DataClasificationComponent } from './components/data-clasification/data-clasification.component';
import { DataAugmentationComponent } from './components/data-augmentation/data-augmentation.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    ProjectDetailsComponent,
    SearchBoxComponent,
    PicStackComponent,
    FootComponent,
    NavigationBarComponent,
    DataCollectionComponent,
    PreProjectionComponent,
    DataClasificationComponent,
    DataAugmentationComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

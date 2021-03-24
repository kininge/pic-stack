import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PicStackComponent } from './components/pic-stack/pic-stack.component';
import { FootComponent } from './components/foot/foot.component';
import { DataCollectionComponent } from './components/data-collection/data-collection.component';
import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: 
  [
    AppComponent,
    ProjectDetailsComponent,
    SearchBoxComponent,
    PicStackComponent,
    FootComponent,
    DataCollectionComponent,
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PicStackComponent } from './components/pic-stack/pic-stack.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    ProjectDetailsComponent,
    SearchBoxComponent,
    PicStackComponent
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.scss']
})
export class DataCollectionComponent implements OnInit 
{
  public apiUrl: string= undefined;
  public parameter: string= undefined;

  constructor() { }

  ngOnInit() {}

  pageStatus()
  {
    if(this.apiUrl && this.parameter)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  collectData()
  {
    this.apiUrl= undefined;
    this.parameter= undefined;
  }

}

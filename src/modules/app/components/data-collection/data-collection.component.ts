import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.scss']
})
export class DataCollectionComponent implements OnInit 
{
  public collectionType: string= 'image';
  public response: boolean= false;

  public images: string= undefined;
  public imagesList: string[]= [];

  public apiUrl: string= undefined;
  public parameter: string= undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  getImage()
  {
    this.imagesList= [];

    if(this.images!= undefined)
    {
      this.imagesList= this.images.trim().split(', ');
    }
  }

  pageStatus()
  {
    if(this.collectionType== 'url')
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
    else
    {
      if(this.imagesList.length> 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }

  collectData()
  {
    if(this.collectionType== 'image')
    {
      this.httpClient.post('http://0.217.15.13:8000/download/openImages', { 'classList': this.imagesList })
      .subscribe
      {
        result=>
        {
          console.log(result);
        }
        error=>
        {
          console.log(error);
        }
      }
    }

    this.images= undefined;
    this.imagesList= [];
    this.apiUrl= undefined;
    this.parameter= undefined;
  }

}

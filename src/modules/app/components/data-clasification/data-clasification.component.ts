import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-clasification',
  templateUrl: './data-clasification.component.html',
  styleUrls: ['./data-clasification.component.scss']
})
export class DataClasificationComponent implements OnInit 
{
  

  public path: string= undefined;
  public generatedTag: string= undefined;

  constructor() { }

  ngOnInit() { }

  pageStatus()
  {
    if(this.path)
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
    this.path= undefined;
  }

}

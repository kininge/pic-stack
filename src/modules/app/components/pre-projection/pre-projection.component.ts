import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-projection',
  templateUrl: './pre-projection.component.html',
  styleUrls: ['./pre-projection.component.scss']
})
export class PreProjectionComponent implements OnInit 
{
  public path: string= undefined;
  public width: number= 80;
  public height: number= 80;

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
    this.width= 80;
    this.height= 80;
  }
}

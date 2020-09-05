import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-augmentation',
  templateUrl: './data-augmentation.component.html',
  styleUrls: ['./data-augmentation.component.scss']
})
export class DataAugmentationComponent implements OnInit 
{
  public path: string= undefined;
  public rotation: number= 40;
  public widthShift: number= 0.2;
  public heightShift: number= 0.2;
  public share: number= 0.2;
  public zoom: number= 0.2;
  public horizontalFlip: boolean= true;


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
    this.rotation= 40;
    this.widthShift= 0.2;
    this.heightShift= 0.2;
    this.share= 0.2;
    this.zoom= 0.2;
    this.horizontalFlip= true;
  }

}

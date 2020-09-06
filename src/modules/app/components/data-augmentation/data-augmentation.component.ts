import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public shear: number= 0.2;
  public zoom: number= 0.2;
  public horizontalFlip: boolean= true;


  constructor(private httpClient: HttpClient) { }

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

    this.httpClient.post('http://0.217.15.13:8000/augmentation/augment', 
    { 'image_directory_path': this.path, 'rotation_range': this.rotation, 'width_shift_range': this.widthShift,
      'height_shift_range': this.heightShift, 'shear_range': this.shear, 'zoom_range': this.zoom,
      'horizontal_flip': this.horizontalFlip, 'fill_mode': 'nearest' })
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

    this.path= undefined;
    this.rotation= 40;
    this.widthShift= 0.2;
    this.heightShift= 0.2;
    this.shear= 0.2;
    this.zoom= 0.2;
    this.horizontalFlip= true;
  }

}

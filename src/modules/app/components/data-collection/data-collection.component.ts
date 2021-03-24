import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pic } from 'src/modules/app/interfaces/pic';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.scss']
})
export class DataCollectionComponent implements OnInit 
{
  public imageURL: string= undefined;
  public imageName: string= undefined;

  constructor(private httpClient: HttpClient, private dataTransfer: DataTransferService) { }

  ngOnInit() 
  {
    
  }

  pageStatus()
  {
    if(this.imageName && this.imageURL)
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
    const dateAndTimeNow= new Date()
    const pic: Pic= { picName: this.imageName, picURL: this.imageURL, picDateTime: dateAndTimeNow };
    this.dataTransfer.updatedImage(pic);

    this.imageURL= undefined;
    this.imageName= undefined;
  }

}

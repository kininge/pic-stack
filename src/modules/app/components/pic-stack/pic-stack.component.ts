import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pic } from 'src/modules/app/interfaces/pic';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-pic-stack',
  templateUrl: './pic-stack.component.html',
  styleUrls: ['./pic-stack.component.scss']
})
export class PicStackComponent implements OnInit 
{
  @Output() sendComparePics= new EventEmitter<Pic[]>();

  private page: number= 1;
  private searchBy: string= null;
  private pageCount: number= 8;
  private stackOfPics: Pic[]= [];
  private presentPics: Pic[]= [];
  
  constructor(private httpClient: HttpClient, private dataTransfer: DataTransferService) { }

  ngOnInit() 
  {
    this.dataTransfer.imageStreem.subscribe
    (
      result=>
      {
        console.log(result);
        this.stackOfPics= result;
        this.search();
      },
      error=>
      {
        console.log(error);
      }
    );

    this.dataTransfer.sortOrderStreem.subscribe
    (
      result=>
      {
        console.log(result);
      },
      error=>
      {
        console.log(error);
      }
    );

    this.dataTransfer.searchStreem.subscribe
    (
      result=>
      {
        console.log(result);
        this.searchBy= result;
        this.search();
      },
      error=>
      {
        console.log(error);
      }
    );
  }

  search()
  {
    this.presentPics= [];

    if(this.searchBy!= null)
    {
      if(this.searchBy.length> 0)
      {
        for(let image of this.stackOfPics)
        {

          if(image.picName.toLowerCase().includes(this.searchBy.toLowerCase()))
          {
            this.presentPics.push(image);
          }
        }
      }
      else
      {
        this.presentPics= this.stackOfPics;
      }
    }
    else
    {
      this.presentPics= this.stackOfPics;
    }

    
    
  }

}

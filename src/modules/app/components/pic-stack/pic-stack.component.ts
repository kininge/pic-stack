import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Image
{
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Component
({
  selector: 'app-pic-stack',
  templateUrl: './pic-stack.component.html',
  styleUrls: ['./pic-stack.component.scss']
})
export class PicStackComponent implements OnInit 
{

  public picStack: Image[] =[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() 
  {
    for(let index= 0; index< 50; index++)
    {
      // https://dog.ceo/api/breeds/image/random

      this.httpClient.get<Image[]>("https://picsum.photos/v2/list")
      .subscribe(
        result=>
        {
          console.log(result);
          this.picStack= result;
          console.log(this.picStack);
        },
        error=>
        {
          console.log(error);
        }
      )
    }
  }

}

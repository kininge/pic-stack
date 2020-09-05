import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pic-stack',
  templateUrl: './pic-stack.component.html',
  styleUrls: ['./pic-stack.component.scss']
})
export class PicStackComponent implements OnInit 
{

  public picStack: string[] =[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() 
  {
    for(let index= 0; index< 50; index++)
    {
      this.httpClient.get<{ message: string, status: string }>("https://dog.ceo/api/breeds/image/random")
      .subscribe(
        result=>
        {
          this.picStack.push(result.message.replace(/'\'/g, ''));
        },
        error=>
        {
          console.log(error);
        }
      )
    }
  }

}

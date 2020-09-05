import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit 
{
  public search: string= undefined;
  public searchOption: string[]= ['People', 'Airoplane', 'Mountens', 'Cat', 'Car', 'Train', 'Bus', 'House', 'River', 'Farm', 'Code', 'Tree', 'Mask', 'Dog'];
  public searchInteligence: string[]= [];

  public inteligence: boolean= false;

  constructor() { }

  ngOnInit() { }
  
  searching()
  {
    this.searchInteligence= [];

    if(this.search.length> 0)
    {
      this.inteligence= true;

      this.searchOption.forEach( record=> 
      {
        if( record.toLowerCase().includes(this.search.toLowerCase()))
        {
          this.searchInteligence.push(record);
        }
      });
    }
    else
    {
      this.inteligence= false;
    }
    
  }

  optionSelected(selectedOption: string)
  {
    this.search= selectedOption;
    this.inteligence= false;
  }
}

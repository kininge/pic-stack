import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit 
{
  public search: string= undefined;
  public searchOption: string[]= [];
  public searchInteligence: string[]= [];

  public sortImage: string= "assets/sort.png";

  public inteligence: boolean= false;

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit() 
  { 
  }
  
  searching()
  {
    this.dataTransfer.updateSearch(this.search);
  }

  sortPics()
  {
    //this.sortImage= "assets/sort-blue.png";
    this.dataTransfer.updateSortOrder(true);
  }
}

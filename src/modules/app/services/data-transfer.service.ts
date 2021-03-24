import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Pic } from '../interfaces/pic';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService 
{
  private allImages: Pic[]= [];
  private imageSource = new BehaviorSubject<Pic[]>(this.allImages);
  private sortOrderSource = new BehaviorSubject<boolean>(false);
  private searchSource = new BehaviorSubject<string>(null);
  
  public imageStreem = this.imageSource.asObservable();
  public sortOrderStreem = this.sortOrderSource.asObservable();
  public searchStreem = this.searchSource.asObservable();

  constructor() { }

  updatedImage(image: Pic)
  {
    this.allImages.push(image);
    this.imageSource.next(this.allImages);
  }

  updateSortOrder(sortOrder: boolean)
  {
    this.sortOrderSource.next(sortOrder);
  }

  updateSearch(search: string)
  {
    console.log('search: '+search);
    this.searchSource.next(search);
  }

}

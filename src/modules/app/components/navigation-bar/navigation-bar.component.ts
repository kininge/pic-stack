import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit 
{
  public currentTab: string= undefined;
  
  constructor(private router: Router) { }

  ngOnInit() 
  {
    const url: string[]= window.location.href.split('/');
    this.currentTab= url[url.length- 1];
    console.log(this.currentTab);
  }

  checkTab(tab: string)
  {
    this.currentTab= tab;
    console.log(this.currentTab);
  }

}

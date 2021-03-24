import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit 
{

  public projectDetails: { detailLogo: string, detailTitle: string, detailDetails: string }[]=
  [
    { detailLogo: "assets/user-input-blue.png",
      detailTitle: "User Input",
      detailDetails: "Take images from user in format of URL"
    },
    { detailLogo: "assets/stacked-files-blue.png",
      detailTitle: "Pic Stack",
      detailDetails: "Take all user added images and create stack of images"
    },
    { detailLogo: "assets/filter-blue.png",
      detailTitle: "Filter",
      detailDetails: "Provide filters like search image name and sort image by time it get added"
    }
  ]

  constructor() { }

  ngOnInit() { }

}

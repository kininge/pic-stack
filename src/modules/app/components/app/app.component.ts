import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  public inputNumber: number= undefined;
  public output: string[]= [];


  public logo1: string= "assets/pick-stack-logo.png";
  public logo2: string= "assets/pick-stack-logo-gray.png";
  public logo3: string= "assets/pick-stack-logo-blue.png";

  public projectLogo: string= this.logo1;
  public projectTitle: string= 'Pic-stack';

  printEachDigit()
  {
    this.output= [];
    var local= this.inputNumber.toString();

    for(let ele of local)
    {
      this.output.push(ele);
    }
  }

}

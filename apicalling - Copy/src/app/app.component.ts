import { Component } from '@angular/core';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private getApi:ApicallService){}
  postArray=[]
  ngOnInit(){
    this.getApi.getPost().subscribe((res)=>{
      this.postArray=res
      console.log(this.postArray)
    })
  }
  title = 'apicalling';
}

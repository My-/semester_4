import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter:number = 0
  lookAtStar:string = ""
  isShows:boolean = false
  text:boolean = true

  increase = () => this.counter++

  showText = ():void => {
      if(this.isShows){
          this.lookAtStar = "Look at star"
          this.isShows = false
      }else{
          this.lookAtStar = ""
          this.isShows = true
      }

      this.text = this.text ? false : true
  }
}

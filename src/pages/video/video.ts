import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
 
})
export class VideoPage {
 videos: any;
 yo:String = "https://www.youtube.com/embed/";
data;
loaded:boolean;

  constructor(public http:Http,public navCtrl: NavController) {
    this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=videos&channelId=UCaKqmqqNZJOCW6jJXzXlh5A&maxResults=3&key=AIzaSyB0La8ZWOfCuWD6Xl0NW_7bxEvB7YzrYus').map(res => res.json()).subscribe(data => {
      this.videos = data.items;
       this.data = data;
this.loaded = false;
console.log(this.videos);
      
  });

  }

  onLoad(data): void {
    console.log("ariiis");
this.loaded = true;
   
  }

  doInfinite(infiniteScroll) {
    
      setTimeout(() => {
      this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&pageToken='+ this.data.nextPageToken +'&part=snippet&type=videos&channelId=UCaKqmqqNZJOCW6jJXzXlh5A&maxResults=1&key=AIzaSyB0La8ZWOfCuWD6Xl0NW_7bxEvB7YzrYus').map(res => res.json()).subscribe(data2 => {
       console.log(data2.items);
       this.data = data2;
       for(var i=0;i<data2.items.length;i++) {
         console.log(this.videos.push(data2.items[i]));
       }
  
  }); 
      infiniteScroll.complete();
    }, 500); 
  }
}

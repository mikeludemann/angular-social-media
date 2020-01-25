import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  @Input() videolistid: string;
  @Input() width: string;
  @Input() height: string;

  @ViewChild('youtubeplaylist') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=" + this.videolistid);

  }

}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  @Input() videoid: string;
  @Input() width: string;
  @Input() height: string;

  @ViewChild('youtube') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("src", "https://www.youtube.com/embed/" + this.videoid);

  }

}

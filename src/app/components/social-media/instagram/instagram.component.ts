import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  @Input() instagramPostID: string;

  @ViewChild('instagram') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("data-instgrm-permalink", "https://www.instagram.com/p/" + this.instagramPostID);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");
    js.setAttribute("src", "https://www.instagram.com/embed.js");
    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'google-plus',
  templateUrl: './google-plus.component.html',
  styleUrls: ['./google-plus.component.css']
})
export class GooglePlusComponent implements OnInit {

  @Input() googlePlusID: string;
  @Input() postID: string;

  @ViewChild('googleplus') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("data-href", "https://plus.google.com/" + this.googlePlusID + "/posts/" + this.postID);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");
    js.setAttribute("type", "text/javascript");
    js.setAttribute("src", "https://apis.google.com/js/platform.js");
    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    js.setAttribute("charset", "utf-8");
    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pinterest-button-follow',
  templateUrl: './pinterest-button-follow.component.html',
  styleUrls: ['./pinterest-button-follow.component.css']
})
export class PinterestButtonFollowComponent implements OnInit {

  @Input() follow: string;
  @Input() fullName: string;

  @ViewChild('buttonfollow') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("href", "https://www.pinterest.com/" + this.follow);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");

    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

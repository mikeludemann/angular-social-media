import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pinterest-profile',
  templateUrl: './pinterest-profile.component.html',
  styleUrls: ['./pinterest-profile.component.css']
})
export class PinterestProfileComponent implements OnInit {

  @Input() username: string;
  @Input() format: string;
  @Input() boardWidth: string;
  @Input() scaleHeight: string;
  @Input() scaleWidth: string;

  @ViewChild('profile') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("href", "https://www.pinterest.com/" + this.username);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");

    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

    if (this.format == "square") {
      this.el.nativeElement.setAttribute("data-pin-board-width", "400");
      this.el.nativeElement.setAttribute("data-pin-scale-height", "240");
      this.el.nativeElement.setAttribute("data-pin-scale-width", "80");
    }

    if (this.format == "sidebar") {
      this.el.nativeElement.setAttribute("data-pin-board-width", "150");
      this.el.nativeElement.setAttribute("data-pin-scale-height", "800");
      this.el.nativeElement.setAttribute("data-pin-scale-width", "60");
    }

    if (this.format == "header") {
      this.el.nativeElement.setAttribute("data-pin-board-width", "900");
      this.el.nativeElement.setAttribute("data-pin-scale-height", "120");
      this.el.nativeElement.setAttribute("data-pin-scale-width", "115");
    }

    if (this.format == "custom") {
      this.el.nativeElement.setAttribute("data-pin-board-width", + this.boardWidth);
      this.el.nativeElement.setAttribute("data-pin-scale-height", + this.scaleHeight);
      this.el.nativeElement.setAttribute("data-pin-scale-width", + this.scaleWidth);
    }

    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

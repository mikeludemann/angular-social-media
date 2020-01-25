import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pinterest-pin',
  templateUrl: './pinterest-pin.component.html',
  styleUrls: ['./pinterest-pin.component.css']
})
export class PinterestPinComponent implements OnInit {

  @Input() size: string;
  @Input() descriptionHide: string;
  @Input() pinID: string;

  @ViewChild('pin') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("data-pin-width", this.size);
    this.el.nativeElement.setAttribute("data-pin-terse", this.descriptionHide);
    this.el.nativeElement.setAttribute("href", "https://www.pinterest.com/pin/" + this.pinID);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");

    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

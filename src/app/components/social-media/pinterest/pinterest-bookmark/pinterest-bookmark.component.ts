import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pinterest-bookmark',
  templateUrl: './pinterest-bookmark.component.html',
  styleUrls: ['./pinterest-bookmark.component.css']
})
export class PinterestBookmarkComponent implements OnInit {

  @Input() language: string;
  @Input() round: boolean;
  @Input() large: boolean;

  @ViewChild('bookmark') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("data-pin-lang", this.language);

  }

  ngAfterViewInit() {

    var js = document.createElement("script");

    js.setAttribute("async", "true");
    js.setAttribute("defer", "true");
    js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");


    if (this.round == true) {

      this.el.nativeElement.setAttribute("data-pin-round", "true");

    }

    if (this.large == true) {

      this.el.nativeElement.setAttribute("data-pin-tall", "true");

    }


    if (this.language != "" || this.language != null) {

      this.el.nativeElement.setAttribute("data-pin-lang", this.language);

    }

    document.getElementsByTagName("head").item(0).appendChild(js);

  }

}

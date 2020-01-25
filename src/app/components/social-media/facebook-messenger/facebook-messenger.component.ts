import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'facebook-messenger',
  templateUrl: './facebook-messenger.component.html',
  styleUrls: ['./facebook-messenger.component.css']
})
export class FacebookMessengerComponent implements OnInit {

  @Input() username: string;
  @Input() text: string;

  @ViewChild('facebookmessenger') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("href", "https://m.me/" + this.username);

  }

  ngAfterViewInit() {

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

    document.getElementsByTagName("head").item(0).appendChild(link);

  }

}

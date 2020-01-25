import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  @Input() postURL: string;

  @ViewChild('facebook') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("data-href", this.postURL);

  }

  ngAfterViewInit() {

    /**
     * Facebook SDK - <head></head>
     * 
     * <script>
     * (function(d, s, id) {
     * var js, fjs = d.getElementsByTagName(s)[0];
     * if (d.getElementById(id)) return;
     * js = d.createElement(s); js.id = id;
     * js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.1';
     * fjs.parentNode.insertBefore(js, fjs);
     * }(document, 'script', 'facebook-jssdk'));
     * </script>
     */

  }

}

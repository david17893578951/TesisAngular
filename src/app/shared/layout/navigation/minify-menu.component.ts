import {Component} from '@angular/core';

import {LayoutService} from '../layout.service';

declare var $:any;

@Component({
  selector: 'sa-minify-menu',
  template: `<span class="minifyme" (click)="toggle()">
    <i class="fa fa-arrow-circle-left hit"></i>
</span>`,
})
export class MinifyMenuComponent {

  constructor(private layoutService: LayoutService) {
  }

  toggle() {
  //  this.layoutService.onMinifyMenu()
 var $body = $('body');

    if (!$body.hasClass("menu-on-top")) {
      $body.toggleClass("minified");
      $body.removeClass("hidden-menu");
      $('html').removeClass("hidden-menu-mobile-lock");
    }  
}
}

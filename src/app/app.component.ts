import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,
    navigation: true,
    keyboardScrolling: true,
    css3: true
  });

  constructor(public fullpageService: MnFullpageService) {
  }
}

import { Component } from '@angular/core';
import {StringInjectorHelperService} from './string-injector-helper.service';
import {StringInjection} from 'ngx-string-injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = 0;
  title = 'Loading...';
  translationInjections: StringInjection[] = [];

  constructor(private stringInjectorHelperService: StringInjectorHelperService) {
  }

  ngOnInit(): void {
    // Set title later to show delay translations or network request based strings
    setTimeout(() => {
      this.title = 'This a test link {0}. Click this {1} as well please.';
    }, 2000);

    this.translationInjections = [
      {
        placeholder: '{0}',
        onRender: () => {
          return this.stringInjectorHelperService.simpleAnchor('Anchor');
        },
        onClick: (e: Event) => {
          e.preventDefault();
          this.number++;
        }
      },
      {
        placeholder: '{1}',
        onRender:  () => {
          return this.stringInjectorHelperService.simpleButton('Button');
        },
        onClick: () => {
          this.number--;
        }
      }
    ]
  }
}

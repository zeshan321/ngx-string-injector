import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input
} from '@angular/core';
import {StringInjection} from './string-injection';

@Directive({
  selector: '[stringInjector]'
})
export class StringInjectorDirective implements AfterViewChecked {

  @Input() injections: StringInjection[] = [];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked(): void {
    const placeHolders = this.injections.map(i => i.placeholder);

    if (placeHolders.some(p => this.elementRef.nativeElement.innerHTML.includes(p))) {
      this.injectElements();
    }
  }

  private injectElements(): void {
    for (const injection of this.injections) {
      const id = StringInjectorDirective.getId();

      const element = injection.onRender();
      element.setAttribute('id', id);
      this.elementRef.nativeElement.innerHTML = this.elementRef.nativeElement.innerHTML.replace(injection.placeholder, element.outerHTML)

      setTimeout(() => {
        const domElement: Element | null = document.getElementById(id);
        if (domElement != null) {
          domElement.addEventListener('click', injection.onClick);
        }
      });
    }
  }

  private static getId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

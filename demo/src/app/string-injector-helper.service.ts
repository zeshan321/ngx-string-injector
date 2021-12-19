import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringInjectorHelperService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  simpleAnchor(text: string) {
    const element = this.renderer.createElement('a');
    element.textContent = text;
    element.setAttribute('href' , '');

    return element;
  }

  simpleButton(text: string)  {
    const element = this.renderer.createElement('button');
    element.textContent = text;

    return element;
  };
}

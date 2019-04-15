import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate, keyframes, group } from '@angular/animations';
import { Appear } from './appear';

import { Observable, of } from 'rxjs';

import * as Rematrix from 'rematrix';

@Directive({
  selector: '[appAppear]'
})
export class AppearDirective implements OnInit {

  private hostElement: HTMLElement;

  @Input() private configAppear: Array<Appear>;
  @Input() private loader = false;
  // config exemple :
  // [configAppear]="[{ properties: 'opacity:0, transform:translateY(50px)',  duration: '1s',  transitionType: 'ease-out'}]"
  private duration = '.5s';
  private properties: string;
  private objProp = {};
  private initialProp = {};
  private transitionType = 'ease-out';
  private delay = '.5s';
  private transition: string;
  private elementStyles: any;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private _builder: AnimationBuilder
  ) {
    this.hostElement = this.element.nativeElement;
  }

  public ngOnInit() {
    this.prepareStyles().subscribe( response => {

      if (!this.loader) {
        this.appear(this.hostElement);
      } else {
        // to do maybe
      }
    });
  }

  prepareStyles(): Observable<any> {
    this.elementStyles = window.getComputedStyle(this.hostElement);

    if (this.configAppear) {
      for (let j = 0; j < this.configAppear.length; j++) {
        const element = this.configAppear[j];

        for (const prop in element) {
          if (element.hasOwnProperty(prop)) {
            (this as any)[prop] = (element as any)[prop];
          }
        }
      }
    }

    if (this.properties !== undefined && this.properties !== '') {
      const _that = this;
      const prop = _that.properties.split(', ');
      prop.forEach(function (property) {
        const tup = property.split(':');
        tup[0] = tup[0].replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

        if (_that.elementStyles[tup[0]] !== '') {
          _that.initialProp[tup[0]] = _that.elementStyles[tup[0]];

          // TO DO :
          // Get every transform types and their values to convert them into Rematrix functions
          // Need a good regex for that
          if (tup[0] === 'transform') {
            const myRe = /[a-z]*[A-Z]/g;
            // const transType = myRe.exec(tup[1]);
            const transType = tup[1].match(myRe);
            const matrixFromConfig = Rematrix.parse(tup[1]);

            const matrixFromElement = Rematrix.parse(_that.elementStyles[tup[0]]);

            const combinedMatrix = Rematrix.multiply(matrixFromElement, matrixFromConfig);
            tup[1] = Rematrix.toString(combinedMatrix);
          }
        }

        _that.objProp[tup[0]] = tup[1];
      });
    } else {
      this.objProp = { opacity: '0' };
      this.initialProp = { opacity: this.elementStyles.opacity };
    }

    this.transition = this.duration + ' ' + this.delay + ' ' + this.transitionType;

    return of(true);
  }

  appear(element: any) {
    const myAnimation = this._builder.build([
      style(this.objProp),
      animate(this.transition, style(this.initialProp)),
    ]);
    const player = myAnimation.create(element);
    player.play();
  }

}



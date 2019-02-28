import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate, keyframes, group } from '@angular/animations';
import { Appear } from './appear';

@Directive({
  selector: '[appAppear]'
})
export class AppearDirective implements OnInit {

  private hostElement: HTMLElement;

  @Input() private configAppear: Array<Appear>;
  // config exemple :
  // [configAppear]="[{ properties: 'opacity:0, transform:translateY(50px)',  duration: '1s',  transitionType: 'ease-out'}]"
  private duration = '.5s';
  private properties: string;
  private objProp = {};
  private transitionType = 'ease-out';
  private delay = '0s';
  private transition: string;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private _builder: AnimationBuilder
  ) {
    this.hostElement = this.element.nativeElement;
  }

  public ngOnInit() {
    const styles = window.getComputedStyle(this.hostElement);
    console.log(styles);
    console.log(styles.transform);

    console.log(this.configAppear);

    if (this.configAppear) {
      for (let j = 0; j < this.configAppear.length; j++) {
        const element = this.configAppear[j];

        for (const prop in element) {
          if (element.hasOwnProperty(prop)) {
            console.log(prop + '=>' + element[prop]);
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
        _that.objProp[tup[0]] = tup[1];
        console.log(tup[0].replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }));
      });
    }

    this.transition = this.duration + ' ' + this.transitionType;

    this.appear(this.hostElement);
  }

  appear(element: any) {
    const myAnimation = this._builder.build([
      style(this.objProp),
      animate(this.transition, style({ opacity: 'inherit' })),
    ]);
    const player = myAnimation.create(element);
    player.play();
  }

}



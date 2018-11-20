import { Parallax } from './parallax';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appParallaxCover]',
  host: {
    '(scroll)': 'onScroll()'
  }
})
export class ParallaxCoverDirective implements OnInit {

  @Input() private config: Parallax;
  @Input() private axis: 'X' | 'Y' = 'Y';
  @Input() private speed = .2;
  @Input() private initialValue = 0;
  @Input() private initialTransform: string;
  @Input() private maxValue: number;
  @Input() private minValue: number;
  @Input() private cssUnit = 'px';
  @Input() private scrollerSelector: string;
  @Input() private parallaxElement: HTMLElement;

  private cssProperty = 'transform';
  private scrollElement: any;
  private hostElement: HTMLElement;

  constructor(element: ElementRef) {
    this.hostElement = element.nativeElement;
  }

  public ngOnInit() {
    // Read config
    for (const prop in this.config) {
      if (this.config.hasOwnProperty(prop)) {
        (this as any)[prop] = (this.config as any)[prop];
      }
    }

    this.speed = +this.speed;
    this.initialValue = +this.initialValue;

    this.parallaxElement = this.parallaxElement || this.hostElement;

    // Grab scroll element
    console.log(this.scrollerSelector);
    if (this.scrollerSelector) {
      try {
        this.scrollElement = document.querySelector(this.scrollerSelector);
        console.log(this.scrollElement);
        if (!this.scrollElement) {
          throw new Error((`ID ('${this.scrollerSelector}') does not exist! Using window`));
        }
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.warn(e);
        this.scrollElement = window;
      }
    } else {
      this.scrollElement = window;
    }

    this.onScroll();

    this.scrollElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll = () => {
    console.log('le on scrol');
    let result: string;
    let scrollPosition: number;

    // Read scroll position * speed + initial val
    if (this.scrollElement instanceof Window) {
      scrollPosition = this.scrollElement.scrollY * this.speed + this.initialValue;
    } else {
      scrollPosition = this.scrollElement.scrollTop * this.speed + this.initialValue;
    }

    // Set limits
    if (this.maxValue !== undefined && scrollPosition >= this.maxValue) {
      scrollPosition = this.maxValue;
    } else if (this.minValue !== undefined && scrollPosition <= this.minValue) {
      scrollPosition = this.minValue;
    }

    // Get output based on axis
    if (this.axis === 'X') {
      result = 'translate3D(calc(' + scrollPosition + this.cssUnit + '), 0, 0)';
    } else {
      result = 'translate3D(0, calc(' + scrollPosition + this.cssUnit + '), 0)';
    }

    this.parallaxElement.style[this.cssProperty as any] = result;
  }
}

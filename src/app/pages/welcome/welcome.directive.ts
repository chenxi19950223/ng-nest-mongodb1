import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective {
    @Input() aaa: number;

  constructor(
      private el: ElementRef
  ) {
      el.nativeElement.style.backgroundColor = '#448aff';
  }

}

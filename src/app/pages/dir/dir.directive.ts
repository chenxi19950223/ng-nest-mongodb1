import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDir]',
})
export class DirDirective {

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {
        console.log(this.el.nativeElement);
    }

    @HostListener('click')
    onClick(event): void {
        const div = this.renderer.createElement('div');
        const text = this.renderer.createText('Hello world!');

        this.renderer.appendChild(div, text);
        this.renderer.appendChild(this.el.nativeElement, div);
        console.log(this.el.nativeElement)
        // console.log(this.el.nativeElement.scrollWidth);
        // console.log(this.el.nativeElement.offsetWidth);

    }

}

import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Directive({
    selector: '[appDisabled]'
})
export class DisabledDirective {

    @Input() set disabledDirective(condition: boolean) {
        const action = condition ? 'enable' : 'disable';
        console.log(condition);
        condition ? this.elementRef.nativeElement.style.cursor = 'text' : this.elementRef.nativeElement.style.cursor = 'no-drop';
        setTimeout(() => this.ngControl.control[action](), 0);
    }

    constructor(
        private ngControl: NgControl,
        private elementRef: ElementRef
    ) {
    }

}

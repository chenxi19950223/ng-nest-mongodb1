import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { LeadListType } from './lead-list-type';

@Directive({
    selector: '[appLead]'
})
export class LeadDirective implements AfterViewInit{

    /*
    * 外层元素元素传递近指令的信息
    * id为需要引导的元素
    * text为引导的提示信息
    * */
    @Input() set leadDom(list: LeadListType[]) {
        this.getLeadDom(list);
    }

    constructor(
        private elementRef: ElementRef
    ) {
    }

    getLeadDom(list): void {
        list.forEach(item => {
            const dom = this.elementRef.nativeElement.querySelector(item.id);
            console.log(dom);
            console.log(dom.clientWidth);
        });
    }

    ngAfterViewInit() {
    }

}

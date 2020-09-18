import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadDemoComponent } from './lead-demo.component';
import { NzAnchorModule } from 'ng-zorro-antd';
import { LeadDemoService } from './lead-demo.service';



@NgModule({
    declarations: [LeadDemoComponent],
    exports: [
        LeadDemoComponent
    ],
    imports: [
        CommonModule,
        NzAnchorModule
    ],
    providers: [LeadDemoService]
})
export class LeadDemoModule { }

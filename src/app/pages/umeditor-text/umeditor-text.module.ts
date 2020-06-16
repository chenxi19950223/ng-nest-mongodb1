import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill';

import { UmeditorTextRoutingModule } from './umeditor-text-routing.module';
import { UmeditorTextComponent } from './umeditor-text.component';


@NgModule({
    declarations: [UmeditorTextComponent],
    imports: [
        CommonModule,
        UmeditorTextRoutingModule,
    ],
})
export class UmeditorTextModule {
}

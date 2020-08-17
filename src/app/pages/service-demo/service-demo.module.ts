import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceDemoRoutingModule } from './service-demo-routing.module';
import { ServiceDemoComponent } from './service-demo.component';
import { SelfService } from './services/self.service';
import { DisabledDirective } from './disabled.directive';
import { ServiceDemoPipe } from './service-demo.pipe';


@NgModule({
    declarations: [ServiceDemoComponent, DisabledDirective, ServiceDemoPipe],
    imports: [
        CommonModule,
        ServiceDemoRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [SelfService]
})
export class ServiceDemoModule {
}

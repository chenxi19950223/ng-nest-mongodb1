import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UmeditorTextComponent } from './umeditor-text.component';


const routes: Routes = [
    {
        path: '',
        component: UmeditorTextComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UmeditorTextRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlcanvasComponent } from './htmlcanvas.component';

const routes: Routes = [
    {
        path: '',
        component: HtmlcanvasComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlcanvasRoutingModule { }

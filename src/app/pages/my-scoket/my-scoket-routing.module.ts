import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyScoketComponent } from './my-scoket.component';

const routes: Routes = [
    {
        path: '',
        component: MyScoketComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyScoketRoutingModule { }

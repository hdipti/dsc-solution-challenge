import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sc2021Component } from './sc2021.component';

const routes: Routes = [
    {
        path: '', component: Sc2021Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Sc2021RoutingModule { }

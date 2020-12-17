import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindteamComponent } from './findteam.component';

const routes: Routes = [
    {
        path: '', component: FindteamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FindteamRoutingModule { }

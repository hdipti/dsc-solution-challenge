import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamFinderComponent } from './team-finder.component';

const routes: Routes = [
    { path: '', component: TeamFinderComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamFinderRoutingModule {
}

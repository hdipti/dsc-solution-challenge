import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'sc2021', loadChildren: () => import('./sc2021/sc2021.module').then(m => m.Sc2021Module) },
            { path: 'findteam', loadChildren: () => import('./findteam/findteam.module').then(m => m.FindteamModule) },
            { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
            { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

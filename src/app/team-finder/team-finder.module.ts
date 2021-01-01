import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { TeamFinderRoutingModule } from './team-finder-routing.module';
import { TeamFinderComponent } from './team-finder.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  
  imports: [
    CommonModule,
    TranslateModule,    
    FormsModule,
    ReactiveFormsModule,
    TeamFinderRoutingModule,
	NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  declarations: [TeamFinderComponent, HeaderComponent, ProfileComponent, BlogComponent]
})
export class TeamFinderModule { }

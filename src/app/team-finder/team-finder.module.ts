import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamFinderRoutingModule } from './team-finder-routing.module';
import { TeamFinderComponent } from './team-finder.component';

@NgModule({
  
  imports: [
    CommonModule,
    TranslateModule,    
    FormsModule,
    ReactiveFormsModule,
    TeamFinderRoutingModule
  ],
  declarations: [TeamFinderComponent]
})
export class TeamFinderModule { }

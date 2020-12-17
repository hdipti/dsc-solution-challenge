import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sc2021Component } from './sc2021.component';

import { Sc2021RoutingModule } from './sc2021-routing.module';
import { PageHeaderModule } from './../../shared';
import { LoggerService } from '@asx/core/logger/logger.service';

@NgModule({
  imports: [CommonModule, Sc2021RoutingModule, PageHeaderModule,],
  declarations: [Sc2021Component],
  providers: [LoggerService]
})
export class Sc2021Module { }

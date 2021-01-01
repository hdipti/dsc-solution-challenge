import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';
import { PageHeaderModule } from './../../shared';
import { LoggerService } from './../../core/logger/logger.service';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, PageHeaderModule,],
  declarations: [AboutComponent],
  providers: [LoggerService]
})
export class AboutModule { }

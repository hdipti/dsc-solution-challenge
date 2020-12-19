import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FindteamComponent } from './findteam.component';

import { FindteamRoutingModule } from './findteam-routing.module';
import { PageHeaderModule } from './../../shared';
import { LoggerService } from '@asx/core/logger/logger.service';

@NgModule({
  imports: [CommonModule, FindteamRoutingModule, PageHeaderModule, NgbCarouselModule, NgbAlertModule],
  declarations: [FindteamComponent],
  providers: [LoggerService]
})
export class FindteamModule { }

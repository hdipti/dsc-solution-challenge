import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { BlogRoutingModule } from './blog-routing.module';
import { PageHeaderModule } from './../../shared';
import { LoggerService } from '@asx/core/logger/logger.service';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, PageHeaderModule,],
  declarations: [BlogComponent],
  providers: [LoggerService]
})
export class BlogModule { }

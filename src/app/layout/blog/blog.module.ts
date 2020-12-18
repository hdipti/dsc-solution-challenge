import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { BlogRoutingModule } from './blog-routing.module';
import { PageHeaderModule } from './../../shared';
import { LoggerService } from '@asx/core/logger/logger.service';
import { EditorComponent } from './editor/editor.component';
import { EditorOptions } from './editor/editoroptions';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, PageHeaderModule],
  declarations: [BlogComponent, EditorComponent, PostComponent],
  providers: [LoggerService],
  exports: [EditorComponent],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class BlogModule {

   /**
   * A static method to provide configuration to the [BlogEditorModule].
   */
  static forRoot(config: EditorOptions) {
    return {
      ngModule: BlogModule,
      providers: [{provide: EditorOptions, useValue: config}]
    };
  }

 }

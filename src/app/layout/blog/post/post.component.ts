import { Component, OnInit } from '@angular/core';
// import { ComponentBase } from 'buildmotion-core';
import { Router } from '@angular/router';
import { LoggerService } from '@asx/core/logger/logger.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit  { // extends ComponentBase 

  postContent: string;

  constructor(
    router: Router,
    loggingService: LoggerService //,
  //   public formBuilder: FormBuilder,
   ) {
    //super('PostComponent', loggingService, router);
   }

  ngOnInit() {
    // simulate retrieval of content from data store;
    this.postContent = `hello editor from post component`;
  }

  // onMarkdownChange(markdown: string) {
  //   this.postContent = markdown;
  //   console.log(`markdown: ${this.postContent}`);
  // }
}
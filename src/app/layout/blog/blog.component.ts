import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts: Array<any> = [];
  constructor() {
    this.posts.push(
        {
          title:'Almonds are good for Health',
          content:'Almonds contain high amounts of HDL which helps reduce cholestrol. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo,id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.'

        },
        {
          title:'Sugar is bad for health',
          content:'Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in.'

        },
        {
          title:'Cut down your carbs!!!',
          content:'Sugar besides being bad for diabetes, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique  sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue.'

        }
    );

   }

  ngOnInit() {
  }

}

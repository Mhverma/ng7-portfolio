import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {


@Input() limit = 12;
    posts: Observable<any[]>;
  constructor(posts: PostService) {
  	 this.posts = posts.postList.pipe(map(list => list.slice(0, this.limit)));
   }

  
}

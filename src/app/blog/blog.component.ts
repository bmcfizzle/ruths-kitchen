import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  dummyBlog1: Blog = {id: 1, title: 'hello', author: 'brian', description: 'hiya', blogImage: 'hello', date: new Date()};
  dummyBlog2: Blog = {id: 2, title: 'Second blog', author: 'brian', 
  description: 'this description', blogImage: 'xxiixxi', date: new Date()};

  constructor() { }

  ngOnInit() {
    

  }

}

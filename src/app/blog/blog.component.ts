import { Component, OnInit } from "@angular/core";
import { Blog } from "../models/blog";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  dummyBlog1: Blog = {
    id: 1,
    title: "Delicious Halloumi Wraps!",
    author: "Ruth",
    description:
      "Take a dive into the rubbery salty world of halloumi with this incredible recipe",
    blogImage: "none",
    date: new Date(),
    featured: true
  };

  constructor() {}

  ngOnInit() {}
}

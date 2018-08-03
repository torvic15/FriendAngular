import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person/person.model';
import { PERSONS } from 'src/app/person/mocks';
import { POST } from 'src/app/post/mocks';
import { Post } from 'src/app/post/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myPerson : Person[];
  myPerPost : Person;
  myPost:Post[];
  text:string;
  constructor() { }

  ngOnInit() {
    this.myPerson = PERSONS;
    this.myPerPost = PERSONS[0]
    this.myPost=POST;
  }
  addPost(){
    
    let post: Post = new Post();
    post.id=1;
    post.person=this.myPerPost;
    post.publication=new Date();
    post.text=this.text;
   
    this.myPost.push(post)
  }
 

}

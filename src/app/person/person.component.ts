import { Component, OnInit } from '@angular/core';


import { Person, Friends, Persons } from 'src/app/person/person.model';
import { PERSONS, FRIENDS,PERSONAS } from 'src/app/person/mocks';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  newfriend2: Persons;
  myPerson : Person[];
  
  myFriends: Person[]
  anotherPeople: Persons[];
  newfriend: Persons;
  constructor() { }

  ngOnInit() {
    this.myPerson = PERSONS;
    this.myFriends = PERSONS;
    this.anotherPeople = PERSONAS;
    this.newfriend= PERSONAS[0];
    this.newfriend2= PERSONAS[1];
  }
  addFriend(){
    let friend: Person = new Person();
    friend.solicitudes=this.newfriend;
    friend.solicitudes=this.newfriend2;
    this.myFriends.push(friend)
  }

}

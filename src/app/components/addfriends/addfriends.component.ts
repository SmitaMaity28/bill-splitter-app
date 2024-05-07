import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { friendsadd } from 'src/app/model/friendsadd';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {
  @Output() closef:EventEmitter<any>=new EventEmitter();
  @Output() friend:EventEmitter<friendsadd>=new EventEmitter();
  email:string;
  constructor() { }

  ngOnInit(): void {
  }
  close(): void {
    this.closef.emit()
  }
  save(){
    const addx={
      friends:this.email
    }
    this.friend.emit(addx)
  }
}

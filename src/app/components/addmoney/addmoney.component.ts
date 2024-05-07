import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addExpence } from 'src/app/model/addExpence';
import { friendsadd } from 'src/app/model/friendsadd';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {
  @Input() friendsarr:friendsadd[] = [];
  @Output() closes:EventEmitter<any>=new EventEmitter();
  @Output() saves:EventEmitter<addExpence>=new EventEmitter();

  friends:string="";
  description:string;
  amount:number;
  catagory:string;
  date:Date;
  dropdown:Boolean=false;
  selectedFriendsarr:friendsadd[]=[]
  constructor() {
    console.log(this.friendsarr)
   }

  ngOnInit(): void {
  }
  close()
  {

    this.closes.emit()
  }
  save()

  {
      const addex={
        friends:this.selectedFriendsarr,
        description:this.description,
        catagory:this.catagory,
        amount:(this.amount/this.selectedFriendsarr.length),
        total:this.amount,
        date:this.date
      }
      this.description="";
      this.catagory="";
      this.amount=0;
      this.date=new Date();
      this.saves.emit(addex)
      this.close()
  }
  dropdowns(){
    this.dropdown=!this.dropdown;
  }
  toggleVisibility(e,index:number){
      if(e.target.checked)
      {
        this.friends=""
        this.selectedFriendsarr.push(this.friendsarr[index])
        this.selectedFriendsarr.forEach(element => {
          this.friends=this.friends+" "+element.friends
        });
      }
      else{
        this.friends=""
        this.selectedFriendsarr.splice(this.selectedFriendsarr.indexOf(this.friendsarr[index]),1)
        this.selectedFriendsarr.forEach(element => {
          this.friends=this.friends+" "+element.friends
        });
      }
  }
}

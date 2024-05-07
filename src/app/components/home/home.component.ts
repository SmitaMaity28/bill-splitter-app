import { addExpence } from './../../model/addExpence';
import { Component, OnInit } from '@angular/core';
import { friendsadd } from 'src/app/model/friendsadd';
import { expencedetail } from 'src/app/model/expencedetail';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean = false;
  showf:boolean = false;
  showdetail:boolean = false;
  paynow:boolean = false;
  localitem:string ="";
  test:string = "hello";
  user:string;
  friendsarr:friendsadd[]=[]
  expence:addExpence[]=[]
  expence2:addExpence[]=[]
  expencedetailsdata:expencedetail;
  amount:number;
  constructor(private router:Router,private toaster:ToastrService) {
    if(localStorage.getItem('friends')==null) {
      this.friendsarr=[] ;
      // console.log(this.friendsarr)
    }
    else{
      this.friendsarr=JSON.parse(localStorage.getItem('friends')||"");

    }
    if(localStorage.getItem('expences')==null) {
      this.expence=[] ;
      // console.log("nulll")
      // console.log(this.friendsarr)
    }
    else{
      this.expence=JSON.parse(localStorage.getItem('expences')||"");

    }
    if(localStorage.getItem('newex')==null) {
      this.expence2=[] ;
      // console.log("nulll")
      // console.log(this.friendsarr)
    }
    else{
      this.expence2=JSON.parse(localStorage.getItem('newex')||"");

      this.expence2=this.expence2;
    }
    this.user=localStorage.getItem('logined');
    this.user=this.user.slice(0,this.user.indexOf('@'))
  }

  ngOnInit(): void {
  }
  open(){
    this.show = !this.show;
  }
  openf(){
    this.showf=!this.showf;
  }
  save(addExpence:addExpence)
  {
    this.expence.push(addExpence);
    localStorage.setItem('expences', JSON.stringify(this.expence))
    this.expence2.push(addExpence);
    localStorage.setItem('newex', JSON.stringify(this.expence2))
  }
  addfriends(friends:friendsadd)
  {
    this.friendsarr.push(friends);
    this.openf()
    localStorage.setItem('friends', JSON.stringify(this.friendsarr))
  }
  deleteFriend(index:number)
  {
    console.log(index);
    this.friendsarr.splice(index, 1);
    localStorage.setItem('friends', JSON.stringify(this.friendsarr))
  }
  deletes(i:number,j:number){

      this.expence[i].friends.splice(j, 1);
      this.expence[i].total=this.expence[i].friends.length*this.expence[i].amount;
      if(this.expence[i].friends.length==0)
      {
        this.expence.splice(i, 1);
      }
      localStorage.setItem('expences', JSON.stringify(this.expence))
  }
  pay(i:number,j:number)
  {
    this.paynow=!this.paynow;
    this.amount=this.expence2[i].amount
    let arr:number[]=[];
    arr.push(i)
    arr.push(j)
    console.log(arr,i,j)
    localStorage.setItem('todelete', JSON.stringify(arr))
  }
  paids(event:boolean)
{

    this.paynow=!this.paynow;
    if(event)
    {
      let arr:number[]=[];
      arr=JSON.parse(localStorage.getItem('todelete'));
      console.log(arr[0])
      this.expence2[arr[0]].friends.splice(arr[1], 1);
      this.expence2[arr[0]].total=this.expence2[arr[0]].friends.length*this.expence2[arr[0]].amount;
      if(this.expence2[arr[0]].friends.length==0)
      {
        this.expence2.splice(arr[0], 1);
      }
      localStorage.setItem('newex', JSON.stringify(this.expence2))
    }
}
  details(i:number,j:number)
  {
    const addex={
      friends:this.expence[i].friends[j].friends,
      description:this.expence[i].description,
      catagory:this.expence[i].catagory,
      amount:this.expence[i].amount,
      date:this.expence[i].date
    }
    this.expencedetailsdata=addex;
    this.showdetail=!this.showdetail;
  }
  opendetail()
  {
    this.showdetail=!this.showdetail;
  }
logout()
{
  this.router.navigate(["/"]);
  this.toaster.success('Logout Sucesss', 'You are now logged off.', {
    timeOut: 3000,
    tapToDismiss:true
  });
}

  }

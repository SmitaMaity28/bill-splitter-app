import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {
  @Output() closePaynow:EventEmitter<any>=new EventEmitter();
  @Input() amount:number;
  pay:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  close(status:boolean)
  {
    this.closePaynow.emit(status);
  }
  paid()
  {
    this.pay=!this.pay;
    setTimeout(() => {
      this.close(true);}
      ,3000)
 }
 
}

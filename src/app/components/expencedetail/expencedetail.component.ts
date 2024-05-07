import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {expencedetail} from '../../model/expencedetail'
@Component({
  selector: 'app-expencedetail',
  templateUrl: './expencedetail.component.html',
  styleUrls: ['./expencedetail.component.css']
})
export class ExpencedetailComponent implements OnInit {
  @Output() closeExpenceDetail:EventEmitter<any>=new EventEmitter();
  @Input() expencedetaildata:expencedetail;
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.closeExpenceDetail.emit();
  }
}

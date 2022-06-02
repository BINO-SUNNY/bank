import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pass=""
  amount=""

  acno1=""
  pass1=""
  amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
deposite(){
  var acno=this.acno
  var pass=this.pass
  var amount=this.amount
  const result = this.ds.deposite(acno,pass,amount)
  if(result){
  alert("amount deposited scussessfuly and new balanceis:"+result)
  }
}
withdrow(){
  var acno=this.acno1
  var pass=this.pass1
  var amount=this.amount1
  const result = this.ds.withdrow(acno,pass,amount)
  if(result){
  alert("amount debitted scussessfuly and new balanceis:"+result)
  }
  
}

}

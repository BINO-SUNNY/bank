import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="perfect banking partner"
acno=""
pass=""

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  accnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  passChange(event:any){
    this.pass=event.target.value
    console.log(this.pass);
    
  }




  login(){
var acno= this.acno
var pass=this.pass

const result = this.ds.login(acno,pass)
if(result){
    alert("login success")
    this.router.navigateByUrl('dashboard')
 
  }

}

}




    
// login(a:any,p:any){
//   var acno= a.value
//   var pass=p.value
//   let db=this.db
  
//   if(acno in db){
//     if(pass==db[acno]["password"]){
//       alert("login success")
//     }
//     else{
//       alert("pass incorrect")
//     }
//   }
//   else{
//     alert("account number does not exist")
//   }
//     }
  
//   }
  

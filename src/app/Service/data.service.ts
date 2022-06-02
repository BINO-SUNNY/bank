import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any={
    100:{"acno":100,"username":"bino","password":101,"balance":10000},
    101:{"acno":101,"username":"binoi","password":102,"balance":10000}
  }

  constructor() { }
  login(acno:any,pass:any){
    
    
    let db=this.db
    
    if(acno in db){
      if(pass==db[acno]["password"]){
        return true
        
      }
      else{
        alert("pass incorrect")
        return false
      }
    }
    else{
      alert("account number does not exist")
      return false
    }
      }
    

      // register

      register(username:any, acno:any, password: any){
        let db = this.db
        if(acno in db){
          return false
        }
        else{
          // insert in db
          db[acno] = {
            acno,
            username,
            password,
            "balance": 0

          }
          console.log(db)
          return true
          
        }
      }
      deposite(acno:any,password:any,amt:any){
        var amount = parseInt(amt)
        let db= this.db
        if(acno in db){
          if(password ==db[acno]["password"]){
            db[acno]["balance"]+=amount
            return db[acno]["balance"]
          }
          else{
            alert("incorrect password")
            return false
          }
        }
        else{
          alert("user doesnot exist...")
        }
      }
    

    withdrow(acno:any,password:any,amt:any){

      var amount=parseInt(amt)
      let db=this.db
      if(acno in db){
        if(password == db[acno]["password"]){
          if(db[acno]["balance"]>amount){
            db[acno]["balance"]-=amount
            return db[acno]["balance"]
          }
          else{
            alert("insuficant balance")
            return false
          }

        }
        else{
          alert("incorret password")
          return  false
        }
      }
      else{
        alert("user dosenot exist.....")
        return false
      }

    }
  }

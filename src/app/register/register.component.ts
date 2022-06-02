import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pass=""
  //form group
  registerForm = this.fb.group({
    acno:'',
    pass:'',
    uname:''
  }

  )


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var uname = this.uname
    var acno = this.acno
    var pass =this.pass

    const result = this.ds.register(uname,acno,pass)

    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("already existing... please log in!!")
    }
  }

}

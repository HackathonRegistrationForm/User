import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  register: any;
  data: any=[];


  constructor() { }

  ngOnInit(): void {

  }
    

  method = new FormGroup({                          
 
    name:new FormControl("",[Validators.required,          //take property validations
      Validators.pattern("[a-zA-Z].*")]),
   
    email:new FormControl("",[Validators.required,Validators.email]),
    PhoneNo:new  FormControl("",[
    Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10),
  ]),
  Sub:new FormControl(""),
  message:new FormControl(""),
   sid:new FormControl(0),
  });
  Register(){



this.method.value.sid = this.data.length+1;       
this.data.push(this.method.value)                           //push the student property  into texts array   
localStorage.setItem('contactus',JSON.stringify(this.data))
  }



get name():FormControl{

  return this.method.get("name") as  FormControl;
}
get PhoneNo():FormControl{

  return this.method.get("PhoneNo") as  FormControl;         //In this method to get all details
}
get Sub():FormControl{

  return this.method.get("Sub") as  FormControl;
}
get email():FormControl{

  return this.method.get("email") as  FormControl;
}
get message():FormControl{

  return this.method.get("message") as  FormControl;
}
}

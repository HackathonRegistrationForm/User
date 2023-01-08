import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  reg: any=[];
  uDta: any=[];
  editform=false;
  data={
    sid:0,      
    firstName:'',
    lastName:'',
    PhoneNo:'',
    email:'',
    city:'',
    pincode:'',
    Area:''
  }
  login: any=[];
  constructor() { }
  ngOnInit(): void {
    const regform = localStorage.getItem('Login')  
    if(regform!=null){                                                                                 
      this.login =JSON.parse(regform) 
      console.log( this.login);
    }
    const reg = localStorage.getItem('register')  
    if(reg!=null){                                                                                 
      this.reg =JSON.parse(reg) 
      console.log( this.reg);
    }
    
  }
  closeForm(){
    this.editform=false; 
  }
  save(){
    this.editform=false; 
  }
  edit()
  {
    debugger
    this.editform=true; 
   
  }
  Update(data:any){
    const attendence = this.reg.find((m: { sid: any; }) => m.sid == data.sid)    //Here we take one variable like attendence then check into array fine the logic between both the
    this.editform=false; 
    if(attendence!=null)
    {
      this.reg.splice(attendence.sid,1)
      this.reg.push(data)
      localStorage.setItem('register',JSON.stringify(this.reg)) 
      localStorage.setItem('Login',JSON.stringify(data)) 
     
    }
  }   
}


import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  data:any;
  signup!:FormGroup;
    FormBuilder: any;
    register: any;
    text: any;
    reg: any=[];
  
    constructor(private fb:FormBuilder) { }
    ngOnInit(): void {
     this.signup = this.fb.group({                          
      firstName:new FormControl('',[Validators.required,          
        Validators.pattern('[a-zA-Z].*')]),
      lastName:new FormControl
      ("",[Validators.required,
        Validators.pattern("[a-zA-Z].*")]),   
      email:new FormControl('',[Validators.required,Validators.email]),
      PhoneNo:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  
  
      password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
    city:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    Area:new FormControl('',[Validators.required]),
    sid:new FormControl(0),
      })
    }
    get m(){  
      return this.signup.controls;  
    }  
    sign(){
      if(this.signup.value.firstName ==""||this.signup.value.lastName ==""||this.signup.value.email ==""||this.signup.value.password ==""||this.signup.value.city ==""||this.signup.value.pincode ==""||this.signup.value.Area ==""){
        Swal.fire(  
          'Cancelled',  
          'You Must  Enter All fields !',           //give for condition to take all properties take empty values
          'error'                                  //then take one alert message like not save all data
        )  
        }else{
  
        
      this.signup.value.sid = this.reg.length+1;       
      Swal.fire('Register Successfully!', '', 'success').then(() => {
          window.location.reload()
  })                                                           
      const localdata = localStorage.getItem('register')               
        if(localdata!=null){                                                                         
          this.reg =JSON.parse(localdata)   
          console.log( this.reg);    
        }       
        this.reg.push(this.signup.value)                           
      localStorage.setItem('register',JSON.stringify(this.reg)) 
    }
  }
    signupform(){
      
        console.log(this.signup.value);  
      }  
    
  
    get firstName():FormControl{
      return this.signup.get("firstName") as  FormControl;
    }
    get lastName():FormControl{
      return this.signup.get("lastName") as  FormControl;
    }
    get email():FormControl{
      return this.signup.get("email") as  FormControl;        
    }
    get password():FormControl{
    
      return this.signup.get("password") as  FormControl;
    }
    get confirmpassword():FormControl{
    
      return this.signup.get("confirmpassword") as  FormControl;
    }
    get PhoneNo():FormControl{
  
      return this.signup.get("PhoneNo") as  FormControl;         
    }
  
      
}

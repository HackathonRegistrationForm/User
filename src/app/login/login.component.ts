import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = false;
  List: any=[];
  data: any=[];
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
  }
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }


  Login(data:any)
  {
    if(data.value.email!=""||data.value.password!="")
  {
    const localdata = localStorage.getItem('register')  
    if(localdata!=null){                                                                                 
      this.data =JSON.parse(localdata) 
      console.log( this.data);    
  }
    this.List = this.data.filter((item: any ) => item.email ===data.value.email && item.password==data.value.password );  
      localStorage.setItem('Login',JSON.stringify(this.List)) 
  if(this.List.length==0)
  {
    Swal.fire('Invalid UserName or PassWord!', '', 'error').then(() => {
      window.location.reload()
})                                                            
  }
  else{
      window.location.href="/classes" 
  }
  }
  
  }

}

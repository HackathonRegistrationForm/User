import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
    Class: any;
    Classclass: any;
    Classmethod: boolean | undefined;
    Classvariable: boolean | undefined;
    Classfunction: any;
    showclasses=false            
    data:any=[];
    class:any=[];
    recore:any=[]
    Attendence: any;
    text: any;
    List: any;
    classBList: any=[];
    classCList: any=[];
    classDList: any=[];
    login:any=[]
    Form=false;
    constructor(private router:Router) { }
    ngOnInit(): void { 
        const localdata = localStorage.getItem('attendence')  
        if(localdata!=null){                                                                                 
          this.data =JSON.parse(localdata) 
          console.log( this.data);    
      }
      const regform = localStorage.getItem('Login')  
      if(regform!=null){                                                                                 
        this.login =JSON.parse(regform) 
        console.log( this.login);
      }
      }
      reg(){
        if(this.login.length==0)
        {
          Swal.fire( "Do you want to add Employee? <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
            window.location.href="/form";
        })
      }
      else{
        window.location.href="/classfour";
      }
      }
  classA()
  {
    debugger
    if(this.login.length==0)
    {
      Swal.fire( "Do you want to give attendence? <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
        window.location.href="/form";
    })
  }
  else{
    this.List = this.data.filter((item: any ) => item.Classlist === 'A');           
    console.log(this.List)
  for(let i=0;i<this.List.length;i++){
    var data1=this.List[i]
  }
  localStorage.setItem('classone',JSON.stringify(this.List))
  window.location.href="/classone"
  }
  }
  classB(){
    if(this.login.length==0)
    {
      Swal.fire( "Do you want to give attendence? <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
        window.location.href="/form";
    })
  }else
  {
    this.List = this.data.filter((item: any ) => item.Classlist === 'B');
    console.log(this.List)
  for(let i=0;i<this.List.length;i++){
    var data1=this.List[i]
    console.log(data1)
  }
  localStorage.setItem('classone',JSON.stringify(this.List))
  window.location.href="/classone"
  }
  }
  classC(){
    if(this.login.length==0)
    {
      Swal.fire( "Do you want to give attendence? <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
        window.location.href="/form";
    })
  }else
  {
    this.List = this.data.filter((item: any ) => item.Classlist === 'C');
    console.log(this.List)
  for(let i=0;i<this.List.length;i++){
    var data1=this.List[i]
  }
  localStorage.setItem('classone',JSON.stringify(this.List))
  window.location.href="/classone"
  }
  }
  classD(){
    if(this.login.length==0)
    {
      Swal.fire( "Do you want to give attendence? <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
        window.location.href="/form";
    })
  }else
  {
    this.List = this.data.filter((item: any ) => item.Classlist === 'D');
    console.log(this.List)
  for(let i=0;i<this.List.length;i++){
    var data1=this.List[i]
  }
  
  localStorage.setItem('classone',JSON.stringify(this.List))
  window.location.href="/classone"
  }
  }
  profile(){
    if(this.login.length==0)
    {
      Swal.fire( "Do you want Update your Profile <br> Please Login!!", '', 'error').then(() => {                   //Error messsage will be displayed
        window.location.href="/form";
    })
  }else
  
  {
    window.location.href="/profile"; 
  }
  }
  }


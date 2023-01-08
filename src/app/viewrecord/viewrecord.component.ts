import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import {  AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {Location} from '@angular/common';
@Component({
  selector: 'app-viewrecord',
  templateUrl: './viewrecord.component.html',
  styleUrls: ['./viewrecord.component.css']
})
export class ViewrecordComponent {
  hide: boolean = false;
  text: any;
  datas: any=[];
  data: any=[];
  List: any;
  date: Date | undefined;
  pageSize: any;
  items = [];
  pageOfItems: Array<any> | undefined;
  posts:any;
  p: number = 1;
  POSTS: any;
  page: number = 1;
  count: number = 0;                                       //Here we declare all properties what we have given
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  userid:any;
  editform=true;
  Attendence: any;
  popup: any;
  firstName:any;
  lastName:any;
  email:any;
  PhoneNo:any;
  search:any;
  SAttendence:any;
  AAttendence:any;
  studentattendence={                                            
    sid:0,
    firstName:'',  
    lastName:'',                               
    email:'',
    PhoneNo:'',
    SAttendence:'',
    AAttendence:''
  }
  data1: any=[];
  tabkey: any;
  tabValue: any;
  searchtext: any;
  data2: any=[];
  filteredOperations: any[]=[];
   
  constructor(private fb: FormBuilder,private _location: Location) {
  }
  onChangePage(pageOfItems: Array<any>) {          //Pagination Functionality
  this.pageOfItems = pageOfItems;    
  }
  
    ngOnInit() {
      const localdata1 = localStorage.getItem('AttendenceRecord')     //Here we assigned to all attendence records in to localdata variable     
  if(localdata1!=null){                                               //If localdata is not null    
    this.data1 =JSON.parse(localdata1)                                //Then assign to variable into array
    console.log( this.data1);                                         //Write console logic
  }
  
  const localdata = localStorage.getItem('attendenceform')         //Here we assigned to all attendence records in to localdata variable          
  if(localdata!=null){                                              //If localdata is not null    
    this.datas =JSON.parse(localdata)                               //Then assign to variable into array
    console.log( this.datas);                                      //Write console logic
  }
  }
  back(){
    this._location.back();                                          //Condition for page routing in one page to another page
  }
    // getData() {
    //   this.datas.getData().subscribe(
    //     (data: any) => {
    //       this.data = data;
    //       console.log(this.data)
    //     }
    //   );
    // }
    edit(datas:any){
  this.studentattendence=datas;                                   //We take one variable like studentattence to give parameters and assigned to array
  this.editform=false;                                            //This condition is to display popup window
  console.log(datas)                                               //Write console logic
    }
  
    save(){
      const attendence = this.datas.find((m: { sid: any; }) => m.sid == this.studentattendence.sid)    //Here we take one variable like attendence then check into array fine the logic between both the
      if(this.studentattendence.SAttendence=="Absent")
      {
        this.studentattendence.AAttendence="Absent"
        this.studentattendence.SAttendence=""
      }
      if(this.studentattendence.SAttendence=="Present")
      {
        this.studentattendence.AAttendence=""
        this.studentattendence.SAttendence="Present"
      }
     console.log(attendence)
     for (let i =0; i< this.data1.length;i++){                   
      if(this.data1[i].sid == this.studentattendence.sid){
        this.data1.splice(i,1)                                
      }
    }
     this.data1.push(attendence)
       localStorage.setItem('attendenceform',JSON.stringify(this.datas))
       localStorage.setItem('AttendenceRecord',JSON.stringify(this.data1))  
      this.closeForm();  
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Attendence record has been updated',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    closeForm(){
      this.editform=true; 
    }
  
  
}

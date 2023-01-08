import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent {
  toDisplay=true;
  Attendence:any;
  sid:any=0;
  Presenthide=false
  NoRecords=false
  Present=true
  Absenthide=false
  Absent=true
  data:any=[];
 attdata:any=[];                            //Here declaring all properties what we have given
  searchtext:any;
 datas:any=[];
AAttendence:any;
  tabkey: any;
tabValue: any;
  AttendenceArray: any;
  classlist:any;
dateNow: any;
yes: any;
  today: any;
  myArray: any;
  List: any;
  toDate:any;
  date: Date | undefined;
  newdatechecking: any=[];
  noarray: any=[];
  showdetails=true;
  showdetailsdata=false;
  private dateYesterday: Date = new Date();
  pipe = new DatePipe('en-US');
filter: any;
datefilter:any=[]
Studentfilter={
  date:""
}
  testdata: any=[];
  constructor(private route:ActivatedRoute,public datepipe: DatePipe) {
   }
ngOnInit(): void {
  this.date = new Date();                             //here we declare current time method
   this.date.setDate( this.date.getDate()  ); 
   const now = Date.now();                                           //we assign current date here
   const myFormattedDate = this.pipe.transform(now);   
var data = localStorage.getItem('classone')            //here we assign classone values into data variable            
if(data!=null){                                         //if data is not equal to null         
this.datas =JSON.parse(data)                            //Then convert to json format and assign to array          
 console.log(JSON.parse(data))                                      
}
}

onsubmit(data:any){
  const localdata = localStorage.getItem('AttendenceRecord')                  //Assign attendencercord values into localdata  
  if(localdata!=null){                                                        //if localdata is not null    
       this.data=JSON.parse(localdata);                                        //Convert to json format and assign into data array
 this.datas=this.data;                                                        //assigned to data array into datas array
  }
  const records = this.datas.filter((item: any ) => item.Classlist === data[1].Classlist);    //Here we check the array vales to take one record then check the condition its comparible or not
  console.log(records)
localStorage.setItem('attendenceform',JSON.stringify(records))                 //the condition is true set the values into key format
}


filterdata(){  
 const [  year,month,day] = this.Studentfilter.date.split('-'); 
 const myFormattedDate = this.pipe.transform(this.Studentfilter.date);  
 console.log(day);
 if(day!=null)
 {
 var data = localStorage.getItem('classone')            //here we assign classone values into data variable            
if(data!=null){                                         //if data is not equal to null         
this.testdata =JSON.parse(data)                            //Then convert to json format and assign to array          
 console.log(JSON.parse(data))                                      
}
const localdata = localStorage.getItem('AttendenceRecord')                  //Assign attendencercord values into localdata  
  if(localdata!=null){                                                        //if localdata is not null    
       this.data=JSON.parse(localdata);                                        //Convert to json format and assign into data array
 this.datas=this.data;                                                        //assigned to data array into datas array
  }
  const records = this.datas.filter((item: any ) => item.date === myFormattedDate && item.Classlist === this.testdata[1].Classlist);    //Here we check the array vales to take one record then check the condition its comparible or not
  console.log(records)
  this.datefilter=records
  if( this.datefilter.length==0)
  {
    Swal.fire( " No Records Found On this Date!!", '', 'error').then(() => {                   //Error messsage will be displayed
      window.location.reload();
  })         
  }
  else{
localStorage.setItem('attendenceform',JSON.stringify(this.datefilter))  
  }
this.showdetailsdata=true
this.showdetails=false;
 }
 else{
  Swal.fire( " Please Select Date To Get Records!!", '', 'error').then(() => {                   //Error messsage will be displayed
    window.location.reload();
})         
 }
}


ClassR()
{
  window.location.reload();                                                                     //We use this condition to reload the page
}


Yes(datas:any)
{
  const now = Date.now();                                           //we assign current date here
  const myFormattedDate = this.pipe.transform(now);                  //transform into pipe format
  const localdata = localStorage.getItem('AttendenceRecord')          //Assign attendencercord values into localdata  
  if(localdata!=null){                                                //if localdata is not null                           
    this.data =JSON.parse(localdata)                                  //Convert to json format and assign into data array
    console.log( this.data);
    this.attdata= this.data                                            //data array assigned to attdata array
  }  
  const newdatechecking = this.data.filter((item: any ) => item.sid === datas.sid &&item.date===myFormattedDate  );   
  datas.SAttendence="Present"; 
if(newdatechecking.length!=0)                                     //If variable is empty the length should be zero then jumb to else condition
{
  this.newdatechecking =  newdatechecking;                        //Assign to newdatechecking into this.newdatechecking                                        
  Swal.fire( myFormattedDate+"\n Attendence Already Recorded for this student!", '', 'error').then(() => {                   //Error messsage will be displayed
    window.location.reload();
  })
  }
    else{ 
  datas.date=myFormattedDate            //If length should be zero jump to else condition check date method
  datas.day= new Date().getDate()         //And also day method
  this.attdata.push(datas)               //Push all vales into array
  localStorage.setItem('AttendenceRecord',JSON.stringify(this.attdata))     //set the values into key format
}
}


No(datas:any)
{
  const now = Date.now();                                           //we assign current date here
  const myFormattedDate = this.pipe.transform(now);                  //transform into pipe format
  const localdata = localStorage.getItem('AttendenceRecord')          //Assign attendencercord values into localdata  
  if(localdata!=null){                                                //if localdata is not null                           
    this.data =JSON.parse(localdata)                                                //Convert to json format and assign into data array
    console.log( this.data);
    this.attdata= this.data                                                                     //data array assigned to attdata array
  }  
  const newdatechecking = this.data.filter((item: any ) => item.sid === datas.sid &&item.date===myFormattedDate);              //Here take one variable to assign array vales it will check based on id it is comparing both id's     
  datas.AAttendence="Absent"; 
if(newdatechecking.length!=0)                                                                         //If variable is empty the length should be zero then jumb to else condition
{
  this.newdatechecking =  newdatechecking;                                                           //Assign to newdatechecking into this.newdatechecking                                        
  Swal.fire( myFormattedDate+" \n Attendence Already Recorded for this student!", '', 'error').then(() => {                   //Error messsage will be displayed
    window.location.reload();
})      
    }
    else{ 
  datas.date=myFormattedDate                                                  //If length should be zero jump to else condition check date method
  datas.day= new Date().getDate()                                              //And also day method
  this.attdata.push(datas)                                                    //Push all vales into array
  localStorage.setItem('AttendenceRecord',JSON.stringify(this.attdata))     //set the values into key format
}
}
}

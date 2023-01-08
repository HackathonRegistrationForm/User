import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  data: any=[];
  date:any=[];
StudentAttendence:any={
  sid:0,    
}
  constructor() { }
  ngOnInit(): void {
    this.date=new Date();
    this.date.setDate( this.date.getDate()  ) 
  }
  onSubmit(){
    if(this.Attendence.value.firstName ==""||this.Attendence.value.lastName ==""||this.Attendence.value.email ==""||this.Attendence.value.gender ==""||this.Attendence.value.PhoneNo ==""||this.Attendence.value.Classlist ==""||this.Attendence.value.image ==""){
      Swal.fire(  
        'Cancelled',  
        'You Must  Enter All fields !',           //give for condition to take all properties take empty values
        'error'                                  //then take one alert message like not save all data
      )  
      }
   else{
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,                            //sweet alert message to save the velues
    showCancelButton: false,
    confirmButtonText: 'Save',
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      const localdata = localStorage.getItem('attendence')               
      if(localdata!=null){                                                                         
        this.data =JSON.parse(localdata)   
        console.log( this.data);    
      }
    this.Attendence.value.sid = this.data.length+1;       
      this.data.push(this.Attendence.value)                           //push the student property  into texts array   
    localStorage.setItem('attendence',JSON.stringify(this.data))        //then post the details into localstorage
      Swal.fire('Saved!', '', 'success').then(() => {
        window.location.reload();
})
    } else if (result.isDenied) {
    }
  }) 
}
}
Attendence = new FormGroup({                          
    sid:new FormControl(0),
    date:new FormControl( ""),
    day:new FormControl( ""),
    firstName:new FormControl("",[Validators.required,          //take property validations
      Validators.pattern("[a-zA-Z].*")]),
    lastName:new FormControl
    ("",[Validators.required,
      Validators.pattern("[a-zA-Z].*")]),   
    dob:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    PhoneNo:new  FormControl("",[
    Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10),
  ]),
  Classlist:new FormControl(""),
    image:new FormControl(""),
    gender:new FormControl(""),
  SAttendence:new FormControl("")
  });

AttendenceSubmitted(){
}
get sid():FormControl{

  return this.Attendence.get("sid") as  FormControl;
}
get FirstName():FormControl{

  return this.Attendence.get("firstName") as  FormControl;
}
get lastname():FormControl{

  return this.Attendence.get("lastName") as  FormControl;
}
get PhoneNo():FormControl{

  return this.Attendence.get("PhoneNo") as  FormControl;         //In this method to get all details
}
get dob():FormControl{

  return this.Attendence.get("dob") as  FormControl;
}
get email():FormControl{

  return this.Attendence.get("email") as  FormControl;
}

get Classlist():FormControl{

  return this.Attendence.get("Classlist") as  FormControl;
}
get gender():FormControl{

  return this.Attendence.get("gender") as  FormControl;
}
get image():FormControl{
  return this.Attendence.get("image") as FormControl;
}
get SAttendence():FormControl{
  return this.Attendence.get("SAttendence") as FormControl;
}
}

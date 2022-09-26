import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user={
    userName:"",
    email:"",
    phoneNo:"",
    dob:"",
    address:"",
    password:"",
    confirmPassword:""
  }

  constructor(
   private api:ApiService
  ) { }

  ngOnInit(): void {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
  }

  Adduser(){
    console.log(this.user)
    if( this.user.password == this.user.confirmPassword)
    {
        console.log("password match")
        this.api.adduser(this.user).subscribe(
        (data:any)=>{
         alert("success")
  }
)
    }else{
      alert("password doesn't match !")
    }
    
    
  }
  

}

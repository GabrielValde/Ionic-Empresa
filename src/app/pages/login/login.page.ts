import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Formu:FormGroup=this.Form.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
  Logear(){
    
  }
  constructor(private Form:FormBuilder) { }

  ngOnInit() {
  }

}

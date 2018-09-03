import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'na-registration',
  templateUrl: './na-registration.component.html',
  styleUrls: ['./na-registration.component.scss']
})
export class NaRegistrationComponent implements OnInit {

  public formRegistration: FormGroup;
  userName: string = 'userName';
  email: string = 'email';
  password1: string = 'password1';
  password2: string = 'password1';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formRegistration = this.formBuilder.group({
      [this.userName]: ['', [Validators.required]],
      [this.email]: ['', [Validators.required, Validators.email]],
      [this.password1]: ['', [Validators.required]],
      [this.password2]: ['', [Validators.required]]
    })
  }

}

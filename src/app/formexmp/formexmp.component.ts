import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-formexmp',
  templateUrl: './formexmp.component.html',
  styleUrls: ['./formexmp.component.css']
})
export class FormexmpComponent implements OnInit {

  constructor() { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      firstname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      lastname: new FormControl("",this.textValidatior),
      languages:new FormControl("")
    });
  }
  
  textValidatior(control){
    if(control.value.length<3){
      return {"lastname":true}
    }
}

  onSubmit = function(user){
    console.log(user);
  }

}

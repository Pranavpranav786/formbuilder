import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent {
  constructor(private FormBuilder:FormBuilder){}
  regForm=this.FormBuilder.group({
    firstname:["",Validators.required],
    lastname:["",Validators.required],
    email:["",[Validators.email,Validators.required]],
    password:["",Validators.required]
  })

  save() {
    console.log(this.regForm.value);
  }

}

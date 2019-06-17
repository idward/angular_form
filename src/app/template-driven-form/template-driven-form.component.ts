import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f', { static: true }) signForm: NgForm;

  constructor() {}

  ngOnInit() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    // one approach to set form value (for all fields)
    // this.signForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: '',
    //   gender: 'female'
    // });
    // another approach to set form value (single field)
    this.signForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    console.log(this.signForm);
    this.signForm.reset();
  }
}

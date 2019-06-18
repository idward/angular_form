import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signForm: FormGroup;
  foodsList: Array<{ label: string; value: string }> = [
    { label: 'Milk', value: 'milk' },
    { label: 'Bread', value: 'bread' },
    { label: 'Sugar', value: 'sugar' }
  ];
  forbiddenNames = ['Anna', 'Justin'];

  constructor() {}

  ngOnInit() {
    const controls = this.foodsList.map(control => new FormControl(false));
    console.log(controls);
    this.signForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.isForbiddenNames.bind(this)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      foods: new FormArray(controls),
      secret: new FormControl(''),
      gender: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });

    console.log(this.signForm.get('foods'));
  }

  onSubmit(): void {
    console.log(this.signForm);
  }

  get foodsArray(): FormArray {
    return <FormArray>this.signForm.get('foods');
  }

  onAddHobby(): void {
    (<FormArray>this.signForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  isForbiddenNames(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenNames.includes(control.value)) {
      return { isForbiddenName: true };
    }
    return null;
  }
}

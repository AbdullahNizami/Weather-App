import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder} from '@angular/forms';
import {FormGroup}  from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormArray} from '@angular/forms';
@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component implements OnInit {

    form: FormGroup;
    TotalRow: number;
  constructor(private fb: FormBuilder) { }

    ngOnInit() : void {

    this.form = this.fb.group({
     itemRows: this.fb.array([]) 
    });
    
  }
  
  get formValue(){
    return this.form.get('itemRows') as FormArray
  }

  addField(){
    const itemRows = this.fb.group({
      brand : '',
      model : '',
      capacity : ''
    });
    this.formValue.push(itemRows);
    console.log("Clicked");
    
  }
//  onSubmit(){
//    console.log(this.form.value);
   
//   // if(this.form.valid){

//   //   console.log(this.form.value);
    
//   //   }

//  }
  initItemRow() {
  return this.fb.group({
  brand: "",
  model: "",
  Capacity: "",

});

}
addNewRow(){

  const control = <FormArray>this.form.controls['itemRows'];
  control.push(this.initItemRow());
}
deleteRow(index){
(<FormArray>this.form.get('itemRows')).removeAt(index)
}

}

 
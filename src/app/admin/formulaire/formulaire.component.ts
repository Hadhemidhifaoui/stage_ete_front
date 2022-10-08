import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsService } from 'src/app/shared/services/forms.service';
import * as customBuild from '../../build/ckeditor';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
 public Editor = customBuild;
 orderForm: FormGroup =  this.addFormulaire();
 items!: FormArray;
 public formulaire: any;
 unsub : Subject <any> = new Subject()



  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private router:Router
  ) {
  //    let formControls = {
  //      title: new FormControl('',[
  //        Validators.required,

  //      ]),
  //      description: new FormControl('',[
  //        Validators.required,

  //      ]),
  //  }

}

  ngOnInit(): void {
  // this.orderForm = this.formBuilder.group({
  //   form:this.formBuilder.control(this.addFormulaire()),
  //   items:this.formBuilder.array([this.createItem()]),


  // });

  console.log(this.orderForm);

  }
  get title() { return this.orderForm.get('title') }
  get description() { return this.orderForm.get('description') }
  get formData() {
  return <FormArray>this.orderForm.get('items');

  }


createItem(): FormGroup {
  return this.formBuilder.group({

    content:'',
    type:'',


  });
}
addFormulaire():FormGroup{
  return this.formBuilder.group({
    title:'',
    description:'',
    items: this.formBuilder.array([this.createItem()]),
  })
}


addItem(_ev:any): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}

deleteItemLine(e: { preventDefault: () => void; }, i: number): void {
  e.preventDefault();
  this.items = this.orderForm.get('items') as FormArray;
  console.log(this.items);
  this.items.removeAt(i);
}

// submitForm(formdata: any) {
//   console.log(formdata);
//   alert(
//     "MESSAGE : Ouvrez la console du navigateur pour voir l'objet orderForm"
//   );
// }
submitForm() {
  const formulaire = new FormData();
  // Object.keys(this.formulaire).map((key) => {
  //   formulaire.append(key, this.formulaire[key].value);
  // });

  for (const key in this.orderForm.controls)
  {
    formulaire.append(key, this.orderForm.get(key)?.value);
    console.log(key, this.orderForm.get(key)?.value);

  }
  //formulaire.append('title', this.orderForm.get('title')?.value);
  console.log(formulaire.get('title'));





  console.log(this.orderForm.value);

  this.formsService.createform(formulaire).pipe(takeUntil(this.unsub)).subscribe(
    (res)=>{


      this.router.navigate(['/formulaire']);
    },
    (err)=>{
      console.log(err);
    }
  )

}



}





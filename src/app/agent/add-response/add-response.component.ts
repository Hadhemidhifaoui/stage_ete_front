import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/shared/services/forms.service';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent implements OnInit {
  formId: any;
  formdata: any;
  Form!: FormGroup;


  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,

    private formService:FormsService) {

    }

  ngOnInit(): void {
    this.formId= this.route.snapshot.params['id'];
    this._getForms(this.formId);
  }
  private _getForms(formId: any) : void{


    console.log(formId);
    this.formService.getForm(formId).subscribe(
      form =>{
        this.formdata = form;
        console.log(this.formdata);

      });
  }

  questions() : FormGroup {
    let question = this.formdata.questions
    return this.fb.group({

    content: question[0].content,
     type: '',
    reponses: this.fb.array([])
  })

}


  onSubmit() {

    console.log(this.formdata)



    let x = this.formdata.title;
    let y = this.formdata.description;
    this.Form = this.fb.group({
      title: x,
      description: y,
      questions: this.fb.array([this.questions()]) ,
    });
      console.log(this.Form.value);

      this.formService.createFormulaire(this.Form.value).subscribe(
        res=>{
  console.log(res)



        },
        err=>{
          console.log(err);
        }
      )

    }
  }





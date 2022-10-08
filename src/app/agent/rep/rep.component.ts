import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormsService } from 'src/app/shared';
import * as customBuild from '../../build/ckeditor';

@Component({
  selector: 'app-rep',
  templateUrl: './rep.component.html',
  styleUrls: ['./rep.component.css']
})
export class RepComponent implements OnInit {
  public Editor = customBuild;
  form:any
  formulaire:any
  Questions:any
  formId:any
i:any
  title:any
  description:any


  T:Array<any>=[]
  constructor(private router: Router,private fb: FormBuilder,private route:ActivatedRoute,private formService:FormsService) {

    //this.form=this.getForms(this.route.snapshot.params['id']);

    this.formulaire = this.fb.group({
      title : '',
      description: '',
      agent_id: '',
      questions: this.fb.array([]) ,

    });

   this.Questions = this.formulaire.controls.questions as FormArray;





    }

  ngOnInit(): void {
    this.form=this.getForms(this.route.snapshot.params['id']);


  }
  trackByFn(index:any, item:any) {   return index; }

  getQuestions() : FormArray {
    return this.formulaire.get("questions") as FormArray
  }
  getreponses(i:number): FormArray {
    return this.getQuestions().controls[i].get('reponses') as FormArray
  }




  reponses(): FormGroup {
    return this.fb.group({
     content: '',
     //type: '',

    })
     }
 private getForms(formId: any) : void{
      this.formService.getForm(formId).subscribe(
        form =>{

          this.title=form.title
          this.description=form.description
          console.log(form)
          form.questions?.forEach(q=>{

              if(q.type=='Text')
              {
                this.Questions.push(
                  this.fb.group({
                    content: q.content,
                    type: q.type,
                    reponses :this.fb.array([this.reponses()])
                  })
                );
              }
              if(q.type=='YesNo')
              {
                this.Questions.push(
                  this.fb.group({
                    content: q.content,
                    type: q.type,
                    reponses :this.fb.array([this.reponses()])
                  })
                );
              }

              if(q.type == 'Quiz')
              {
                this.T.push(q.reponses)
                this.Questions.push(
                  this.fb.group({
                    content: q.content,
                    type: q.type,
                    reponses :new FormArray([])
                  }))
              }
              if(q.type == '')
              {
                this.T.push(q.reponses)
                this.Questions.push(
                  this.fb.group({
                    content: q.content,
                    type: q.type,
                    reponses :q.reponses
                  }))
              }

            })
          return form;
        });
    }
    onCheckChange(event:any,i:any) {
      const formArray: FormArray = this.getQuestions().controls[i].get('reponses') as FormArray

      let Q=formArray.value

      if(event.target.checked){
        console.log(Q)
        console.log(event.target.value)

        Q.push({content : event.target.value});
      }
      else{
      Q =formArray.value.filter((item: any)=>item !=event.target.value)
      }
    }


    onSubmit() {


this.formulaire.value.title=this.title
this.formulaire.value.description=this.description

this.formulaire.value.agent_id=localStorage.getItem("User_ID") || ''


console.log(this.formulaire.value.questions.length)
for (var i=0; i<this.formulaire.value.questions.length; i++){
  this.formulaire.value.questions[i].type=''
  console.log(this.formulaire.value.questions[i].type)
}
console.log(this.formulaire.value)

     this.formService.createFormulaire(this.formulaire.value).subscribe(
          res=>{
    console.log(res)
    this.router.navigate(['home']);



          },
          err=>{
            console.log(err);
          }
        )
}





      }



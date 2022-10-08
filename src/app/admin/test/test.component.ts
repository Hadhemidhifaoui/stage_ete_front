import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Form, FormsService, Question } from 'src/app/shared';
import { Subject, takeUntil } from 'rxjs';
import * as customBuild from '../../build/ckeditor';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public Editor = customBuild;
   Form: FormGroup;
  Reponses:string[] = []

  selectedOption: any;

  typeoption:string=''
  quizmodal:boolean=false
  unsub : Subject <any> = new Subject();
 question_id:number=0
  options = [
    { name: "YesNo", value: 1 },
    { name: "Text", value: 2 },
    { name: "Quiz", value: 3 }
  ]




  constructor(private fb:FormBuilder,private formsService: FormsService,
    private router:Router) {

    this.Form = this.fb.group({
      title: '',
      description:'',
      agent_id:'',
      questions: this.fb.array([]) ,
    });
  }
  questions() : FormArray {
    return this.Form.get("questions") as FormArray
  }

   reponses(i:number) : any {
 // console.log(this.questions().controls[i].get('reponses'),"his.questions()");

     return this.questions().controls[i].get('reponses') as FormArray
   }
  newQuestion(type: any,id: number): FormGroup {
    return this.fb.group({

      content: '',
      type: type,

      //Id:id,
      reponses: this.fb.array([])
    })

  }
  newRep(): FormGroup {
 return this.fb.group({
  content:'',

 })
  }

  addQuant(i:number) {
    let r=this.newRep()
    console.log(r,'rrrrrrr');

    this.reponses(i).push(r);
    console.log(r);
  }
  addQuantity() {
   // console.log(event);
    //this.quizmodal=true?event=='Quiz':false
    this.question_id++
    var q=this.newQuestion(this.selectedOption,this.question_id)
    this.questions().push(q);
    //console.log("this.Form.get(reponses)",this.Form.get("reponses"));


  }
  // changetype(event:any){
  //   console.log();
  //   this.typeoption=event.target.value


  // }
  changeContent(e:any,i:number,j:number){
    console.log(e,i,j,this.reponses(i));

  }
  removeQuant(j:number,i:number) {
    this.reponses(i).removeAt(j);
  }
  removeQuantity(i:number) {
    this.questions(



    ).removeAt(i);
  }

  onSubmit() {
    console.log(this.Form.value);

    this.formsService.createFormulaire(this.Form.value).subscribe(
      res=>{
console.log(res)
this.router.navigate(['admin/response']);

        //location.reload();
      },
      err=>{
        console.log(err);
      }
    )

  }
  ngOnInit() {
  }


}

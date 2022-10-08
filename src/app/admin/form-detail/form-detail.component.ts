import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/shared/services/agent.service';
import { FormsService } from 'src/app/shared/services/forms.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  forms:any;
  form:any;
  formId: any;
  formdata: any;
  agent:any;
  agentdata:any;
  agentId:any
  agent_id:any
  constructor(  private route:ActivatedRoute,
    private router : Router,
    private formService:FormsService, private agentsService:AgentService) { }

  ngOnInit(): void {
    this.formId= this.route.snapshot.params['id'];
    this._getForms(this.formId);

    //this._getAgent(this.agentId);
  }
  private _getForms(formId: any) : void{


    console.log(formId);
    this.formService.getForm(formId).subscribe(
      form =>{
        this.formdata = form;
        console.log(this.formdata);
        console.log(this.formdata.Agent)

      });
  }



}

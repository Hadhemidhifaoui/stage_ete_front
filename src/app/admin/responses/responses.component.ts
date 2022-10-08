import { Component, OnInit } from '@angular/core';
import { AgentService, Form, FormsService } from 'src/app/shared';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
  forms: Form[] = [];

  constructor(private formService: FormsService, ) { }

  ngOnInit(): void {
    this._getForms();


  }
  private _getForms() {
    this.formService.getForms().subscribe((forms:any) => {
      console.log(forms['hydra:member']);

      this.forms = forms['hydra:member'];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form';
import { AgentService } from 'src/app/shared/services/agent.service';
import { FormsService } from 'src/app/shared/services/forms.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public agents:any;
forms: Form[] = [];
  constructor(private agentsService: AgentService, private formService: FormsService) { }

  ngOnInit(): void {
    this._getAgents();
    this._getForms();
  }
  private _getAgents() {
    this.agentsService.getAgents().subscribe((agents:any) => {
      console.log(agents['hydra:member']);

      this.agents = agents['hydra:member'];
    });
  }

  private _getForms() {
    this.formService.getForms().subscribe((forms:any) => {
      console.log(forms['hydra:member']);

      this.forms = forms['hydra:member'];
    });
  }

}

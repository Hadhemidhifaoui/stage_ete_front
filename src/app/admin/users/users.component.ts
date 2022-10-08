import { Component, OnInit, TemplateRef } from '@angular/core';

import { Agent } from 'src/app/shared/models/agent';

import { AgentService } from 'src/app/shared/services/agent.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // agents: Agent[] = [];
public agents: any;
  public modalRef!: BsModalRef;

  constructor(private agentsService: AgentService,
    private toastr: ToastrService, private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this._getAgents();
  }
  private _getAgents() {
    this.agentsService.getAgents().subscribe((agents:any) => {
      console.log(agents['hydra:member']);

      this.agents = agents['hydra:member'];
    });
  }
  OpenModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){this.modalRef.hide();}
  reloadAgents(data: any){console.log(data);this.agents=data;}


}

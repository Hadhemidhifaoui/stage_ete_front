import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AgentService } from 'src/app/shared';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input('agentid') agentid :any;
  @Output() hideModal = new EventEmitter();
  @Output() suppliers = new EventEmitter();
  agents: any;

  constructor(private agentsService: AgentService,private messageService: MessageService,) { }

  ngOnInit(): void {
  }
  deleteAgent(agentid: string){
    this.agentsService.deleteAgent(agentid).subscribe(data=>{
    },()=>{},()=>{
      this.agentsService.getAgents().subscribe(data=>{

        this.agents.emit(data);

      })
      this.closeModal();
      location.reload();
    });
  }
  closeModal(){
    this.hideModal.emit(Event);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup
  constructor( private fb: FormBuilder,
    private agentsService: AgentService,
    private router:Router) {
      let formControls = {
        name: new FormControl('',[
          Validators.required,

        ]),
        email: new FormControl('',[
          Validators.required,

        ]),
        password: new FormControl('',[
          Validators.required,

        ]),
        phone: new FormControl('',[
          Validators.required,

        ]),
        street: new FormControl('',[
          Validators.required,
        ]),

        city: new FormControl('',[
          Validators.required,

        ]),
        country: new FormControl('',[
          Validators.required,

        ]),
        function: new FormControl('',[
          Validators.required,

        ]),
        status: new FormControl('',[
          Validators.required,

        ]),
        employed: new FormControl('',[
          Validators.required,

        ]),
      }
      this.addUserForm= this.fb.group(formControls)
    }
    get name() { return this.addUserForm.get('name') }
    get email() { return this.addUserForm.get('email') }
    get password() { return this.addUserForm.get('password') }
     get phone() { return this.addUserForm.get('phone')}
     get street() { return this.addUserForm.get('street') }

     get city() { return this.addUserForm.get('city') }
     get country() { return this.addUserForm.get('country') }
     get function() { return this.addUserForm.get('function') }
     get status() { return this.addUserForm.get('status') }
     get employed() { return this.addUserForm.get('employed') }
  ngOnInit(): void {
  }
  addUser() {
    let data = this.addUserForm.value;
    data.phone =data.phone? parseInt(data.phone) : null
    console.log(data);



    console.log(this.addUserForm.value);

    this.agentsService.createAgent(this.addUserForm.value).subscribe(
      res=>{


        this.router.navigate(['admin/users']);
      },
      err=>{
        console.log(err);
      }
    )

  }
}


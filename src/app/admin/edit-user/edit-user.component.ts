import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent, AgentService } from 'src/app/shared';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  updateUserForm: FormGroup;
  user:any;
  _id:any;
  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router : Router,
    private agentsService:AgentService) {    let formControls = {
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
    this.updateUserForm= this.fb.group(formControls)
  }
  get name() { return this.updateUserForm.get('name') }
  get email() { return this.updateUserForm.get('email') }
  get password() { return this.updateUserForm.get('password') }
   get phone() { return this.updateUserForm.get('phone')}
   get street() { return this.updateUserForm.get('street') }

   get city() { return this.updateUserForm.get('city') }
   get country() { return this.updateUserForm.get('country') }
   get function() { return this.updateUserForm.get('function') }
   get status() { return this.updateUserForm.get('status') }
   get employed() { return this.updateUserForm.get('employed') }

  ngOnInit(): void {
    let idAgent= this.route.snapshot.params['id'];

    console.log(idAgent);




    this.agentsService.getAgent(idAgent).subscribe(
      res=>{
        let agent = res;
        console.log(agent);



        this.updateUserForm.patchValue({
      name : agent.name,
      email: agent.email,
      password: agent.password,
      phone: agent.phone,
      street: agent.street,
      city: agent.city,
      country: agent.country,
      function: agent.function,
      status: agent.status,
      employed: agent.employed,




    })



      },
      err=>{
        console.log(err);
      }
    )
  }
   updateUser() {
     let data = this.updateUserForm.value;
      console.log(data);

   let idAgent = this.route.snapshot.params['id'];

    let agent: Agent=
      {name: data.name, email:data.email,password:data.password,phone: data.phone,
      street:data.street,
      city: data.city,
      country: data.country,
      function: data.function,
      status: data.status,
      employed :data.employed};

console.log(agent);
     this.agentsService.updateAgent( agent, idAgent ).subscribe(
       res =>{
         let agent = res;
         console.log(agent)

         this.router.navigate(['admin/users']);
       },
       err=>{
         console.log(err);
       }
     )

   }


}

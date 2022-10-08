import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashlogin',
  templateUrl: './dashlogin.component.html',
  styleUrls: ['./dashlogin.component.css']
})
export class DashloginComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: [''],
      password:[''],
    });
  }
  onSubmit() {

    this.submitted = true;




    this.userService.loginAdmin(this.loginForm.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['admin/dashboard']);
      },
    (error: any) => {
        console.log(error)
    }
    )
  }


}

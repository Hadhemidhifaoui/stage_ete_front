import { Component, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Form, FormsService } from 'src/app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  forms: Form[] = [];
  foo = `<div>{{form.title}}</div>`;
  constructor(private formService: FormsService, private sanitizer:DomSanitizer) { }

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

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgentComponent } from './agent/agent.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
//import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToastModule } from 'primeng/toast';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/add-user/add-user.component';

import { HeaderComponent } from './admin/header/header.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { SidemenuComponent } from './admin/sidemenu/sidemenu.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ModalComponent } from './admin/users/modal/modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { FormulaireComponent } from './admin/formulaire/formulaire.component';
import { DashloginComponent } from './admin/dashlogin/dashlogin.component';
import { TestComponent } from './admin/test/test.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginAgentComponent } from './agent/login-agent/login-agent.component';
import { HomeComponent } from './agent/home/home.component';
import { AddResponseComponent } from './agent/add-response/add-response.component';

import { ResponsesComponent } from './admin/responses/responses.component';
import { FormDetailComponent } from './admin/form-detail/form-detail.component';
import { RepComponent } from './agent/rep/rep.component';




@NgModule({
  declarations: [
    AppComponent,
   AdminComponent,
   UsersComponent,
   AddUserComponent,
   EditUserComponent,
    AgentComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ModalComponent,
    FormulaireComponent,
    DashloginComponent,
    TestComponent,
    LoginAgentComponent,
    HomeComponent,
    AddResponseComponent,
    ResponsesComponent,
    FormDetailComponent,
    RepComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatSliderModule,
    CardModule,
    ToastModule,
    InputTextModule,
    TableModule,

    ButtonModule,
    ConfirmDialogModule,
    ColorPickerModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    InputSwitchModule,
    EditorModule,
    TagModule,
    InputMaskModule,
    FieldsetModule,
    ModalModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    CKEditorModule,
  
  ],
  providers: [MessageService,BsModalService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

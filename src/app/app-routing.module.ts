import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';



import { DashloginComponent } from './admin/dashlogin/dashlogin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { FormDetailComponent } from './admin/form-detail/form-detail.component';
import { FormulaireComponent } from './admin/formulaire/formulaire.component';
import { HeaderComponent } from './admin/header/header.component';
import { ResponsesComponent } from './admin/responses/responses.component';
import { TestComponent } from './admin/test/test.component';

import { UsersComponent } from './admin/users/users.component';
import { AddResponseComponent } from './agent/add-response/add-response.component';
import { HomeComponent } from './agent/home/home.component';
import { LoginAgentComponent } from './agent/login-agent/login-agent.component';
import { RepComponent } from './agent/rep/rep.component';

const routes: Routes = [
  //  {
  //    path: '',
  //    redirectTo: 'admin',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'admin',
  //    component: DashboardComponent,
  //    children: [
  //      {
  //        path: '',
  //        loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  //      }
  //   ]
  // },
  // {
  //   path : 'admin',
  //    component:AdminComponent,
  //   loadChildren : () => import ('./admin/admin.module').then(m=> m.AdminModule)
  //  },
  {

    path :'admin',
    component : AdminComponent,
    children: [

      {
        path : 'users',
         component : UsersComponent
       },
      {
        path : '',
         component : DashboardComponent
       },
      {
        path : 'dashboard',
        component : DashboardComponent,
      },
      {
        path : 'users/add-user',
         component : AddUserComponent
       },
       {
         path : 'users/edit-user/:id',
          component : EditUserComponent
        },
        {
          path : 'response/form-detail/:id',
           component : FormDetailComponent
         },
        {
         path : 'formulaire',
        component : FormulaireComponent
       },
       {
        path : 'test',
       component : TestComponent
      },
       {
         path : 'response',
        component : ResponsesComponent
       },



    ]
  },

{
  path : 'login-admin',
 component : DashloginComponent
},
{
  path : 'test',
 component : TestComponent
},

{
 path : 'users',
  component : UsersComponent
},
{
 path : 'users/add-user',
  component : AddUserComponent
},
{
  path : 'users/edit-user/:id',
   component : EditUserComponent
 },
 {
  path : 'formulaire',
 component : FormulaireComponent
},
{
  path : 'response',
 component : ResponsesComponent
},
 {
  path : '',
 component : LoginAgentComponent
},
{
  path : 'home',
 component : HomeComponent
},
{
  path : 'header',
 component : HeaderComponent
},
{
  path : 'home/add-reponse/:id',
   component : AddResponseComponent
 },
 {
  path : 'home/rep/:id',
   component : RepComponent
 },

];

@NgModule({
  imports: [ CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

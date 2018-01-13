import { CourcesComponent } from './cources.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourcesServices } from './course/cources.service';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { FormexmpComponent } from './formexmp/formexmp.component';
import { BaseconComponent } from './basecon/basecon.component';


@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    CourseComponent,
    ProductComponent,
    MemberComponent,
    FormexmpComponent,
    BaseconComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
     {
       path:'member',
       component:MemberComponent
     },
     {
       path:'product',
       component:ProductComponent
     },
     {
       path:"formexmp",
       component:FormexmpComponent
     },
     {
       path:"course",
       component:CourcesComponent
     },
     {
      path:"basecon",
      component:BaseconComponent
    }
    ])
  ],
  providers: [
    CourcesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

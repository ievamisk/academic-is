import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


import { StudentComponent } from './student.component';
import { SemesterService } from '../semester.service';
import { ContactsComponent } from '../contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentComponent, ContactsComponent],
  providers: [SemesterService, CookieService]
})
export class StudentModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SemesterComponent } from './semester/semester.component';
import { SubjectComponent } from './subject/subject.component';
import { SquaresComponent } from './squares/squares.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './app.service';
import { SemesterService } from './semester.service';
import { SemesterModule } from './semester/semester.module';
import { StudentModule } from './student/student.module';
import { ContactsComponent } from './contacts/contacts.component';


const route: Routes = [
  { path: '', component: LoginComponent},
  { path: 'student', component: StudentComponent},
  { path: 'student/contacts', component: ContactsComponent},
  { path: 'semester/:year/:id', component: SemesterComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SquaresComponent,
    SideNavbarComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      route,
      { enableTracing: false }
    ),
    HttpClientModule,
    StudentModule,
    SemesterModule
  ],
  providers: [SemesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

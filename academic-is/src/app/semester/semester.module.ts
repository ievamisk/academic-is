import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from './semester.component';
import { SemesterService } from '../semester.service';
import { SubjectComponent } from '../subject/subject.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SemesterComponent, SubjectComponent],
  providers: [SemesterService]
})
export class SemesterModule { }

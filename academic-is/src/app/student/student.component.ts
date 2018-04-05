import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SemesterService } from '../semester.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {
  constructor(private semesterService: SemesterService) {

  }

  ngOnInit() {
  }
}

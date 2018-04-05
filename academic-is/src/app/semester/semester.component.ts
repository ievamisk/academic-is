import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../semester.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.less']
})
export class SemesterComponent implements OnInit {
  private year: number;
  private id: number;
  private semester: Array<any>;
  private subject: any;

  constructor(
    private service: SemesterService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(url => {
        this.year = url.year;
        this.id = url.id;
        this.semester = this.service.filterData(this.year, this.id);
        this.subject = null;
      });
  }

  ngOnInit() {
  }

  selectSubject(id) {
    this.subject = this.semester[id];
  }

}

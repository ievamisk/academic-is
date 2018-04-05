import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.less']
})
export class SubjectComponent implements OnInit, OnChanges {

  @Input()
  private subject: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.subject);
  }
}

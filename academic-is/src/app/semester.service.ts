import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SemesterService {
  private data: any;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.data = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/data/semesters.json');
  }

  public filterData(year, id) {
    if (this.data) {
      return this.data[year][id];
    }
  }

}

import { Component, OnInit, Output, Input } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import {Router, ActivatedRoute} from '@angular/router';
import { SemesterService } from './semester.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService]
})

export class AppComponent {
  title = 'app';
  signed: boolean;
  cookie = 'unknown';

  constructor(private router: Router, private cookieService: CookieService) {
    this.signed = false;
  }

  onChange(event) {
    this.signed = event;
    if (this.signed) {
      this.router.navigate(['student']);
      this.cookieService.set( 'Test', 'logged in', 5);
      this.cookie = this.cookieService.get('Test');
      console.log('cookie say\'s you\'re:', this.cookie);
    } else {
      this.router.navigate(['']);
    }
    console.log('app', this.signed);

  }
}

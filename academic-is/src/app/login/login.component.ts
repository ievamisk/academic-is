import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AppService]
})
export class LoginComponent implements OnInit {
  @Input()
  signed: boolean;
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  login() {
    this.signed = true;
    this.change.emit(this.signed);
    console.log('login: ', this.signed);
  }
}

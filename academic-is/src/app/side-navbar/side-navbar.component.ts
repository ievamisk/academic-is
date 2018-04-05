import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.less']
})
export class SideNavbarComponent implements OnInit {
  @Input()
  signed: boolean;
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  private itemsActivity: boolean[];
  private open: boolean;
  private sidenavHeight: number;

  constructor() {}

  ngOnInit() {
    this.itemsActivity = [false, false, false];
  }

  toggleActive(index) {
    this.itemsActivity.forEach((element, i) => {
      if (index === i) {
        this.itemsActivity[i] = !this.itemsActivity[i];
      } else {
        this.itemsActivity[i] = false;
      }
    });
  }

  logout() {
    this.signed = false;
    this.change.emit(this.signed);
    console.log('logout: ', this.signed);
  }

  toggleOpen() {
    this.open = !this.open;
  }

  getNavHeight() {
    if (this.open) {
      const sidenavHeaderHeight = 64;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.sidenavHeight = windowHeight - sidenavHeaderHeight;
      // console.log(this.sidenavHeight);
    } else {
      // this.sidenavHeight = 0;
    }
    return this.sidenavHeight;
  }
}

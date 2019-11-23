import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { faUtensils, faHamburger, faSearch } from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from '../login-modal/login-modal.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faUtensils = faUtensils;
  faHamburger = faHamburger;
  faSearch = faSearch;
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  get isLogging() {
    return this.router.url.includes('/admin');
  }

  ngOnInit() {
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '60%',
      minWidth: '500px',
      data: { value: 'hello from nav component' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

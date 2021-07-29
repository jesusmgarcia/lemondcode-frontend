import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss'],
})
export class PrivateMenuComponent implements OnInit {
  showUser: string = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.showUser = this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout('/', this.authService.getUsername());
  }
}

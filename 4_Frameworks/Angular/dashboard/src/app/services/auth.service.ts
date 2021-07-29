import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginEntity } from '../model/LoginEntity';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = '';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(login: LoginEntity): boolean {
    let retValue = false;

    if (
      login.username === 'master8@lemoncode.net' &&
      login.password === '12345678'
    ) {
      this.isAuthenticated.next(true);
      this.localStorageService.set(login.username, String(true));
      this.currentUser = login.username;

      retValue = true;
    }

    return retValue;
  }
  logout(redirect: string, email: string): void {
    this.localStorageService.remove(email);
    this.currentUser = '';
    this.isAuthenticated.next(false);
    this.router.navigate([redirect]);
  }
  isLogged(email: string): boolean {
    const authenticated = Boolean(this.localStorageService.get(email));
    this.isAuthenticated.next(authenticated);

    return authenticated;
  }

  getUsername(): string {
    return this.currentUser;
  }
}

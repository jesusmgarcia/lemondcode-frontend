import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoginEntity } from '../model/LoginEntity';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = '';

  private isLoggedSource = new Subject<void>();

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(login: LoginEntity): Observable<boolean> {
    if (
      login.username === 'master8@lemoncode.net' &&
      login.password === '12345678'
    ) {
      this.isAuthenticated.next(true);
      this.localStorageService.set(login.username, String(true));
      this.currentUser = login.username;
      this.isLoggedSource.next();

      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }
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

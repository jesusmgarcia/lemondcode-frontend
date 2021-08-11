import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginEntity } from '../../model/LoginEntity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  showSpinner: boolean = false;
  loginInvalid = false;

  private isLoggedRef: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.isLoggedRef !== undefined) this.isLoggedRef.unsubscribe();
  }

  onSubmit(): void {
    this.loginInvalid = false;

    if (this.form.valid) {
      try {
        this.showSpinner = true;

        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;

        const login: LoginEntity = { username, password };

        this.isLoggedRef = this.authService
          .login(login)
          .subscribe((isLoggedRet: boolean) => {
            if (isLoggedRet) {
              this.router.navigate(['/dashboard']);
            } else {
              this.loginInvalid = true;
            }

            this.showSpinner = false;
          });
      } catch (err) {
        this.loginInvalid = true;
      }
    }
  }
}

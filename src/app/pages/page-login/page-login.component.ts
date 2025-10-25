import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from "../../../gs-api/src/models/authentication-request";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";
import { UtilisateurDto } from "../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.userService.login(this.authenticationRequest).subscribe({
      next: (data) => {
        // ✅ Save access token
        this.userService.setAccessToken(data);

        // ✅ Fetch user details by email
        this.getUserByEmail(this.authenticationRequest.login);
      },
      error: (err) => {
        this.errorMessage = 'Login and/or password incorrect';
        console.error(err);
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }

  // ✅ Fetch user by email
  getUserByEmail(email?: string): void {
    if (!email) {
      console.warn('Email not provided for user lookup');
      return;
    }

    this.userService.getUserByEmail(email).subscribe({
      next: (user: UtilisateurDto) => {
        // ✅ Save user info
        this.userService.setConnectedUser(user);

        // ✅ Navigate after user info is stored
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Error fetching user by email:', err);
      }
    });
  }
}

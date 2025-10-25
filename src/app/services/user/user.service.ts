import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationControllerService } from '../../../gs-api/src/services/authentication-controller.service';
import { UtilisateurControllerService } from '../../../gs-api/src/services/utilisateur-controller.service';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from '../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authService: AuthenticationControllerService,
    private router: Router,
    private utilisateurService: UtilisateurControllerService
  ) {}

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authService.authenticateUsingPOST(authenticationRequest);
  }

  // Fetch user by email
  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (!email) return of({} as UtilisateurDto);
    return this.utilisateurService.findByEmailUsingGET(email);
  }

  // Save full authentication response
  setAccessToken(authResp: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authResp));
  }

  // Save connected user
  setConnectedUser(user: UtilisateurDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(user));
  }

  getConnectedUser(): UtilisateurDto {
    const user = localStorage.getItem('connectedUser');
    return user ? JSON.parse(user) : {} as UtilisateurDto;
  }

  changeMotDepasse(dto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurService.changerMotDePasseUsingPOST(dto);
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) return true;
    this.router.navigate(['login']);
    return false;
  }
}

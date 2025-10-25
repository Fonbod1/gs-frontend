import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from '../../services/entreprise/entreprise.service';
import { UserService } from '../../services/user/user.service';
import { EntrepriseDto } from '../../../gs-api/src/models/entreprise-dto';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {
    nom: '',
    codeFiscal: '',
    description: '',
    email: '',
    numTel: '',
    photo: '',
    steWeb: '',
    adresse: {
      adresse1: '',
      adresse2: '',
      ville: '',
      codePostal: '',
      pays: ''
    }
  };

  errorsMsg: string[] = [];
  private tempPassword = 'som3R@nd0mP@$$word'; // temporary password for new entreprise

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  inscrire(): void {
    this.errorsMsg = [];

    this.entrepriseService.sinscrire(this.entrepriseDto)
      .subscribe({
        next: entreprise => {
          console.log('Entreprise created:', entreprise);
          this.connectEntreprise();
        },
        error: err => {
          console.error('Erreur lors de la création de l’entreprise:', err);
          this.errorsMsg = err.error?.errors || ['Erreur inconnue lors de l’inscription.'];
        }
      });
  }

  private connectEntreprise(): void {
    const authReq: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: this.tempPassword
    };

    this.userService.login(authReq).subscribe({
      next: res => {
        this.userService.setAccessToken(res);
        this.getUserByEmail(authReq.login);

        // Pass the temporary password to the change password page
        localStorage.setItem('origin', 'inscription');
        localStorage.setItem('tempPassword', this.tempPassword);

        this.router.navigate(['changermotdepasse']);
      },
      error: err => {
        console.error('Auto-login failed:', err);
        this.errorsMsg = ['Impossible de se connecter automatiquement.'];
      }
    });
  }

  private getUserByEmail(email?: string): void {
    if (!email) return;

    this.userService.getUserByEmail(email).subscribe({
      next: (user: UtilisateurDto) => {
        this.userService.setConnectedUser(user);
        console.log('Connected user set:', user);
      },
      error: err => console.error('Failed to get user by email:', err)
    });
  }
}

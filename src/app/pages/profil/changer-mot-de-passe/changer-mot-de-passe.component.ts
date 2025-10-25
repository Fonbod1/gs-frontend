import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangerMotDePasseUtilisateurDto } from "../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto";
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  ancienMotDePasse = '';
  nouveauMotDePasse = '';
  confirmationMotDePasse = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Auto-fill temporary password if user comes from inscription
    if (localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancel(): void {
    this.router.navigate(['profile']); // <-- matches route path in AppRoutingModule
  }

  changerMotDePasseUtilisateur(): void {
    const connectedUser = this.userService.getConnectedUser();
    if (!connectedUser?.id) {
      console.error('No connected user found');
      return;
    }

    const dto: ChangerMotDePasseUtilisateurDto = {
      id: connectedUser.id,
      motDePasse: this.ancienMotDePasse,
      nouveauMotDePasse: this.nouveauMotDePasse,
      confirmationMotDePasse: this.confirmationMotDePasse
    };

    this.userService.changeMotDepasse(dto).subscribe({
      next: () => this.router.navigate(['profile']), // <-- matches route path
      error: (err: any) => console.error('Erreur lors du changement de mot de passe:', err)
    });
  }

}

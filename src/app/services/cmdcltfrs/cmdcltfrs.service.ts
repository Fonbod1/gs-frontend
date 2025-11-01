import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommandeClientControllerService } from '../../../gs-api/src/services/commande-client-controller.service';
import { CommandeFournisseurControllerService } from '../../../gs-api/src/services/commande-fournisseur-controller.service';
import { UserService } from '../user/user.service';
import { CommandeClientDtoReq } from '../../../gs-api/src/models/commande-client-dto-req';
import { CommandeFournisseurDtoRes } from '../../../gs-api/src/models/commande-fournisseur-dto-res';
import { LigneCommandeClientDto } from '../../../gs-api/src/models/ligne-commande-client-dto';
import { LigneCommandeFournisseur } from '../../../gs-api/src/models/ligne-commande-fournisseur';

@Injectable({
  providedIn: 'root'
})
export class CmdcltfrsService {

  constructor(
    private commandeClientService: CommandeClientControllerService,
    private commandeFournisseurService: CommandeFournisseurControllerService,
    private userService: UserService
  ) {}

  // Enregistrer commande client
  enregistrerCommandeClient(commandeClient: CommandeClientDtoReq): Observable<CommandeClientDtoReq> {
    commandeClient.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id ?? 0;
    return this.commandeClientService.saveUsingPOST3(commandeClient);
  }

// Enregistrer commande fournisseur
  enregistrerCommandeFournisseur(commandeFournisseur: CommandeFournisseurDtoRes): Observable<CommandeFournisseurDtoRes> {
    commandeFournisseur.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id ?? 0;
    return this.commandeFournisseurService.saveUsingPOST4(commandeFournisseur);
  }
  // Toutes les commandes clients
  findAllCommandesClient(): Observable<CommandeClientDtoReq[]> {
    return this.commandeClientService.findAllUsingGET3();
  }

  //  Toutes les commandes fournisseurs
  findAllCommandesFournisseur(): Observable<CommandeFournisseurDtoRes[]> {
    return this.commandeFournisseurService.findAllUsingGET4();
  }

  //  Toutes les lignes d'une commande client
  findAllLigneCommandesClient(idCmd?: number): Observable<LigneCommandeClientDto[]> {
    if (idCmd) {
      return this.commandeClientService.findAllLignesCommandesClientByCommandeClientIdUsingGET(idCmd);
    }
    return of([]);
  }

  //  Toutes les lignes d'une commande fournisseur
  findAllLigneCommandesFournisseur(idCmd?: number): Observable<LigneCommandeFournisseur[]> {
    if (idCmd) {
      return this.commandeFournisseurService.findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGET(idCmd);
    }
    return of([]);
  }
}

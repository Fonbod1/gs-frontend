import { Injectable } from '@angular/core';
import {CommandeClientControllerService} from "../../../gs-api/src/services/commande-client-controller.service";
import {
  CommandeFournisseurControllerService
} from "../../../gs-api/src/services/commande-fournisseur-controller.service";
import {UserService} from "../user/user.service";
import {CommandeClientDtoReq} from "../../../gs-api/src/models/commande-client-dto-req";
import {Observable, of} from "rxjs";
import {CommandeFournisseurDtoRes} from "../../../gs-api/src/models/commande-fournisseur-dto-res";
import {LigneCommandeClientDto} from "../../../gs-api/src/models/ligne-commande-client-dto";
import {LigneCommandeFournisseur} from "../../../gs-api/src/models/ligne-commande-fournisseur";

@Injectable({
  providedIn: 'root'
})
export class CmdcltfrsService {

  constructor(
    private commandeClientServices: CommandeClientControllerService,
    private commandeFournisseurService: CommandeFournisseurControllerService,
    private userService: UserService,

    //private ligneCmdService: Li
  ) {
  }

  enregistrerCommandeClient(commandeClient: CommandeClientDtoReq): Observable<CommandeClientDtoReq> {
    // @ts-ignore
    commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise.id;
    return this.commandeClientServices.saveUsingPOST3(commandeClient);
  }

  enregistrerCommandeFournisseur(commandeFournisseur: CommandeFournisseurDtoRes): Observable<CommandeFournisseurDtoRes> {
    // @ts-ignore
    commandeFournisseur.idEntreprise = this.userService.getConnectedUser().entreprise.id;
    return this.commandeFournisseurService.saveUsingPOST4(commandeFournisseur);

  }
   findAllCommandesClient(): Observable<CommandeClientDtoReq[]> {
    return this.commandeClientServices.findAllUsingGET3();
   }

  findAllCommandesFournisseur(): Observable<CommandeFournisseurDtoRes[]> {
    return this.commandeFournisseurService.findAllUsingGET4();
  }

  findAllLignCommandClient(idCmd?: number): Observable<LigneCommandeClientDto[]>{
    if (idCmd){
      return this.commandeClientServices.findAllLignesCommandesClientByCommandeClientIdUsingGET(idCmd);

    }
    return of();

  }
  findAllLignCommandFournisseur(idCmd?: number): Observable<LigneCommandeFournisseur[]>{
    if (idCmd){
      return this.commandeFournisseurService.findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGET(idCmd);

    }
    return of();

  }


}

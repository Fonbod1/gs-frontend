import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ClientControllerService} from "../../../gs-api/src/services/client-controller.service";
import {FournisseurControllerService} from "../../../gs-api/src/services/fournisseur-controller.service";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {Observable, of} from "rxjs";
import {FournisseurDto} from "../../../gs-api/src/models/fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(
    private userService: UserService,
    private clientService: ClientControllerService,
   private founisseurServive: FournisseurControllerService
  ) { }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto>{
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.saveUsingPOST2(clientDto);
  }
  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto>{
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.founisseurServive.saveUsingPOST6(fournisseurDto);
  }
   findAllClient(): Observable<ClientDto[]> {
    return this.clientService.findAllUsingGET2();

   }
  findAllFournisseur(): Observable<FournisseurDto[]> {
    return this.founisseurServive.findAllUsingGET6();

  }
  findClientById(id: number): Observable<ClientDto>{
    if (id){
      return this.clientService.findByIdUsingGET2(id)
    }
    return of();
  }
  findFournisseurById(id: number): Observable<FournisseurDto>{
    if (id){
      return this.founisseurServive.findByIdUsingGET6(id)
    }
    return of();
  }



  deleteClient(idClient: number): Observable<any>{
    if (idClient){
      return this.clientService.deleteUsingDELETE2(idClient);
    }
    return of();
   }
  deleteFournisseur(idfournissieur: number): Observable<any>{
    if (idfournissieur){
      return this.founisseurServive.deleteUsingDELETE6(idfournissieur);
    }
    return of();
  }
}

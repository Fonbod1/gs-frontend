import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserService } from '../user/user.service';

// ✅ Import DTOs
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { FournisseurDto } from '../../../gs-api/src/models/fournisseur-dto';
import {FournisseurControllerService} from "../../../gs-api/src/services/fournisseur-controller.service";
import {ClientControllerService} from "../../../gs-api/src/services/client-controller.service";

// ✅ Import API services (check names exactly in your gs-api folder)
//import { ClientsService } from '../../../gs-api/src/services/clients.service';
//import { FournisseurService } from '../../../gs-api/src/services/fournisseur.service';

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(
    private userService: UserService,
    private clientService: ClientControllerService,
    private fournisseurService: FournisseurControllerService
  ) {}

  // ✅ Save a client
  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.saveUsingPOST2(clientDto);
  }

  // ✅ Save a supplier
  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.fournisseurService.saveUsingPOST6(fournisseurDto);
  }

  // ✅ Get all clients
  findAllClients(): Observable<ClientDto[]> {
    return this.clientService.findAllUsingGET2();
  }

  // ✅ Get all suppliers
  findAllFournisseurs(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAllUsingGET6();
  }

  // ✅ Find client by ID (return empty observable if invalid)
  findClientById(id?: number): Observable<ClientDto | null> {
    if (id) {
      return this.clientService.findByIdUsingGET2(id);
    }
    return of(null);
  }

  // ✅ Find supplier by ID (return empty observable if invalid)
  findFournisseurById(id?: number): Observable<FournisseurDto | null> {
    if (id) {
      return this.fournisseurService.findByIdUsingGET6(id);
    }
    return of(null);
  }

  // ✅ Delete client
  deleteClient(idClient?: number): Observable<any> {
    if (idClient) {
      return this.clientService.deleteUsingDELETE2(idClient);
    }
    return of(null);
  }

  // ✅ Delete supplier
  deleteFournisseur(idFournisseur?: number): Observable<any> {
    if (idFournisseur) {
      return this.fournisseurService.deleteUsingDELETE6(idFournisseur);
    }
    return of(null);
  }
}

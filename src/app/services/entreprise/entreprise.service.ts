import { Injectable } from '@angular/core';
import {EntrepriseControllerService} from "../../../gs-api/src/services/entreprise-controller.service";
import {EntrepriseDto} from "../../../gs-api/src/models/entreprise-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entrepriseControllerService: EntrepriseControllerService
  ) { }
  sinscrire(entreprise: EntrepriseDto): Observable<EntrepriseDto>{
    return this.entrepriseControllerService.saveUsingPOST5(entreprise);
  }
}

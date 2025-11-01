import { Component, Input, OnInit } from '@angular/core';
import { CommandeClientDtoReq } from "../../../gs-api/src/models/commande-client-dto-req";
import { CommandeFournisseurDtoRes } from "../../../gs-api/src/models/commande-fournisseur-dto-res";
import { ClientDto } from "../../../gs-api/src/models/client-dto";
import { FournisseurDto } from "../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {

  @Input() origin = '';

  @Input() commande!: CommandeClientDtoReq | CommandeFournisseurDtoRes;

  cltFrs?: ClientDto | FournisseurDto;

  constructor() {}

  ngOnInit(): void {
    this.extractClientFournisseur();
  }

  extractClientFournisseur(): void {
    if (this.origin === 'client') {
      // Narrow type to CommandeClientDtoReq
      const cmdClient = this.commande as CommandeClientDtoReq;
      this.cltFrs = cmdClient.client;
    } else if (this.origin === 'fournisseur') {
      // Narrow type to CommandeFournisseurDtoRes
      const cmdFrs = this.commande as CommandeFournisseurDtoRes;
      this.cltFrs = cmdFrs.fournisseur;
    }
  }

  modifierClick() {

  }
}

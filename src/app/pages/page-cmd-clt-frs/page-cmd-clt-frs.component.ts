import { Component, Input, OnInit } from '@angular/core';
import { CommandeClientDtoReq } from "../../../gs-api/src/models/commande-client-dto-req";
import { CommandeFournisseurDtoRes } from "../../../gs-api/src/models/commande-fournisseur-dto-res";
import { LigneCommandeClientDto } from "../../../gs-api/src/models/ligne-commande-client-dto";
import { CmdcltfrsService } from "../../services/cmdcltfrs/cmdcltfrs.service";
import { Router } from "@angular/router";
//import { CltfrsService } from "../../services/cltfrs/cltfrs.service";


@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit {

  @Input() origin: 'client' | 'fournisseur' = 'client';

  listeCommandes: (CommandeClientDtoReq | CommandeFournisseurDtoRes)[] = [];
  mapLignesCommande: Map<number, LigneCommandeClientDto[]> = new Map();

  constructor(
    private cmdCltFrsService:  CmdcltfrsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCommandes();
  }

  /**
   * Load all commandes depending on origin
   */
  loadCommandes(): void {
    if (this.origin === 'client') {
      this.cmdCltFrsService.findAllLignCommandClient().subscribe((cmds: CommandeClientDtoReq[]) => {
        this.listeCommandes = cmds;
        cmds.forEach(cmd => {
          if (cmd.id) {
            this.cmdCltFrsService.findAllLignCommandFournisseur(cmd.id).subscribe((lignes: LigneCommandeClientDto[]) => {
              this.mapLignesCommande.set(cmd.id!, lignes);
            });
          }
        });
      });
    } else if (this.origin === 'fournisseur') {
      this.cmdCltFrsService.findAllCommandesFournisseur().subscribe((cmds: CommandeFournisseurDtoRes[]) => {
        this.listeCommandes = cmds;
        cmds.forEach(cmd => {
          if (cmd.id) {
            this.cmdCltFrsService.findAllLignCommandFournisseur(cmd.id).subscribe((lignes: LigneCommandeClientDto[]) => {
              this.mapLignesCommande.set(cmd.id!, lignes);
            });
          }
        });
      });
    }
  }

  /**
   * Create new commande
   */
  nouvelleCommande(): void {
    if (this.origin === 'client') {
      this.router.navigate(['nouvellecommandeclt']);
    } else {
      this.router.navigate(['nouvellecommandefrs']);
    }
  }

  /**
   * Calculate total for one commande
   */
  calculerTotalCommande(idCommande: number): string {
    const lignes = this.mapLignesCommande.get(idCommande) || [];
    const total = lignes.reduce((sum, l) => sum + (l.prixUnitaire ?? 0) * (l.quantite ?? 0), 0);
    return total.toLocaleString('fr-FR', { minimumFractionDigits: 1 }) + ' CFA';
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {LigneCommandeClient} from "../../../gs-api/src/models/ligne-commande-client";
import {LigneCommandeClientDto} from "../../../gs-api/src/models/ligne-commande-client-dto";

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.scss']
})
export class DetailCmdComponent implements OnInit {
 // @Input()
 // origin = '';

  @Input()
  ligneCommande: LigneCommandeClientDto = {};

  /*set idCommand(idCommande: number){
    this.idCommand = idCommande;
  }*/


  constructor() { }

  ngOnInit(): void {
  }


  //}




}

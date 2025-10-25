import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {AdresseDto} from "../../../gs-api/src/models/adresse-dto";
import {CltfrsService} from "../../services/cltfrs/cltfrs.service";
import {FournisseurDto} from "../../../gs-api/src/models/fournisseur-dto";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

    origin = "";
    clientFournisseur: any = {};
    adresseDto: AdresseDto = {};
    errorMsg: Array<string> = [];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cltfrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin = data['origin']
    });
    this.findObject()
  }
   findObject(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id){

      if (this.origin === 'client'){
      //  this.router.navigate(['clients']);
       this.cltfrsService.findClientById(id)
         .subscribe(client =>{
           this.clientFournisseur = client;
           this.adresseDto = this.clientFournisseur.adresse;
         });
      }else if (this.origin === 'fournisseur'){
        this.cltfrsService.findFournisseurById(id)
          .subscribe(fournisseur =>{
            this.clientFournisseur = fournisseur;
            this.adresseDto = this.clientFournisseur.adresse;
          });

        //this.router.navigate(['fournisseurs']);

      }
    }
   }


  cancelClick() {
    //this.cancelClickEvent.emit();
    if (this.origin === 'client'){
      this.router.navigate(['clients']);

    }else if (this.origin === 'fournisseur'){

      this.router.navigate(['fournisseurs']);

    }

  }

  enregistrer() {
    //this.saveClickevent.emit();
    if (this.origin === 'client'){
     this.cltfrsService.enregistrerClient(this.mapToClient())
       .subscribe(client =>{
         this.router.navigate(['clients']);
       }, error =>{
         this.errorMsg = error.error.errors;
       })

    }else if (this.origin === 'fournisseur'){
      this.cltfrsService.enregistrerFournisseur(this.mapToFournisseur())
        .subscribe(fournisseur =>{
          this.router.navigate(['fournisseurs']);
        }, error =>{
          this.errorMsg = error.error.errors;
        })


    }

  }
   mapToClient(): ClientDto {
     const clientDto: ClientDto = this.clientFournisseur;
     clientDto.adresse = this.adresseDto;
     return clientDto;
   }
  mapToFournisseur(): FournisseurDto {
    const fournisseurDto: FournisseurDto = this.clientFournisseur;
    fournisseurDto.adresse = this.adresseDto;
    return  fournisseurDto;

  }
}

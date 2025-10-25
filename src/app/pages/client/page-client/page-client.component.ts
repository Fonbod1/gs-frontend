import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CltfrsService} from "../../../services/cltfrs/cltfrs.service";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {
   listClient: Array<ClientDto> = [];
   errorMsg = '';

  constructor(
    private router: Router,
    private cltfrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllClient()
  }

  findAllClient(): void{
    this.cltfrsService.findAllClient()
      .subscribe(clients =>{
        this.listClient = clients;
      })
  }

  nouveauClient() {
    this.router.navigate(['nouveauclient']);
  }
  handleSuppression(event: string ): void{
    if (event === 'success'){
      this.findAllClient();
    } else {
      this.errorMsg = event;
    }

  }
}

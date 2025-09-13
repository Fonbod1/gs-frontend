import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes} from "@angular/router";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {
    origin = "";
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin = data['origin']
    })
  }

}

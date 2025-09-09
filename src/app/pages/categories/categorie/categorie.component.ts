import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  nouvelcategory(): void {
  this.router.navigate(['nouvellecategorie']);

  }
}

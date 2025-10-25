import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CategoryDto } from "../../../../gs-api/src/models/category-dto";
import { CategoryControllerService } from "../../../../gs-api/src/services/category-controller.service";
import { CategoryService } from "../../../services/category/category.service";

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {

  listcategories: Array<CategoryDto> = [];
  selectedCatIdToDelete?: number = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
     this.findAllCategories();
  }

  findAllCategories(): void{
    this.categoryService.findAll()
      .subscribe(res => {
        this.listcategories = res;
      });
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

  modifierCategory(catId: number): void {
    this.router.navigate(['nouvellecategorie', catId]);
  }
  confirmerEtSupprimerCat(): void{
    this.categoryService.delete(this.selectedCatIdToDelete)
      .subscribe(res =>{
        this.findAllCategories();
      }, error =>{
        this.errorMsgs = error.error.message;
      });
  }

  annulerSuppressionCat(): void{
    this.selectedCatIdToDelete = -1;
  }
  selectCatPourSuprimer(id?: number): void{
  this.selectedCatIdToDelete = id;
}
}

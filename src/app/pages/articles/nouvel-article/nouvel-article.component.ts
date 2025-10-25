import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "../../../services/article/article.service";
import { ArticleDto } from "../../../../gs-api/src/models/article-dto";
import { CategoryDto } from "../../../../gs-api/src/models/category-dto";
import { CategoryService } from "../../../services/category/category.service";
import {PhotoControllerService} from "../../../../gs-api/src/services/photo-controller.service";
import SavePhotoUsingPOSTParams = PhotoControllerService.SavePhotoUsingPOSTParams;
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  articleDto: ArticleDto = {};
  listeCategorie: Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
  isEditMode: boolean = false;
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private photosService: PhotoControllerService
  ) {}

  ngOnInit(): void {
    const idArticle = this.activatedRoutes.snapshot.params['idArticle'];
    if (idArticle) {
      this.isEditMode = true;
      this.articleService.findArticleById(idArticle).subscribe({
        next: (article) => {
          this.articleDto = article;
          this.loadCategories();
        },
        error: (err) => console.error('Error loading article:', err)
      });
    } else {
      this.loadCategories();
    }
  }

  loadCategories(): void {
    this.categoryService.findAll().subscribe({
      next: (categories) => {
        this.listeCategorie = categories;
        console.log('Categories loaded:', this.listeCategorie);
      },
      error: (err) => console.error('Error loading categories:', err)
    });
  }

  cancel(): void {
    this.router.navigate(['articles']);
  }

  enregistrerArticle(): void {
    this.articleService.enregistrerArticle(this.articleDto)
      .subscribe( art =>{
        this.savePhoto(art.id, art.codeArticle);
      //this.this.savePhoto()
     // next: () => this.router.navigate(['articles']),
    //  error: (error) => (this.errorMsg = error.error.errors)
    }, error =>{
        this.errorMsg = error.error.errors;
      });
  }
  calculerTTC(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva){
      // prixHT + (prixHT(tauxTVA / 100))
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva/100)));
    }
  }
  onFileInput(files: FileList | null): void {
 if (files){
   this.file = files.item(0);
   if (this.file) {
     const fileReader = new FileReader();
     fileReader.readAsDataURL(this.file);
     fileReader.onload = (event) => {
       if (fileReader.result) {
         this.imgUrl = fileReader.result;
       }
     };
   }
 }
}
  savePhoto(idArticle?: number, titre?: string): void{
    if (idArticle && titre && this.file) {
      const params: SavePhotoUsingPOSTParams = {
        id: idArticle,
        file:  this.file,
        title: titre,
        context: 'article'
      };
      this.photosService.savePhotoUsingPOST(params)
        .subscribe(res =>{
          this.router.navigate(['articles']);
        });
    } else {
          this.router.navigate(['articles']);
    }

  }

}

import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ArticleControllerService} from "../../../gs-api/src/services/article-controller.service";
import {ArticleDto} from "../../../gs-api/src/models/article-dto";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService: UserService,
    private articleService: ArticleControllerService
  ) { }

  enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto>{
    articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.articleService.saveUsingPOST(articleDto);
  }
    findAllArticle():Observable<Array<ArticleDto>> {
    return this.articleService.findAllUsingGET();
    }
     findArticleById(idArticle?: number): Observable<ArticleDto>{
       if (idArticle){
         return this.articleService.findByIdUsingGET(idArticle);
       }
       return of();
     }
      deleteArticle(idArticle: number): Observable<any>{
        if (idArticle){
         return  this.articleService.deleteUsingDELETE(idArticle);
        }
        return of();
  }
}

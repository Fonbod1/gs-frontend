/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';

/**
 * Article Controller
 */
@Injectable({
  providedIn: 'root',
})
class ArticleControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/gestiondestock/v1/articles/all';
  static readonly saveUsingPOSTPath = '/gestiondestock/v1/articles/create';
  static readonly deleteUsingDELETEPath = '/gestiondestock/v1/articles/delete/{idArticle}';
  static readonly findAllArticleByIdCategoryUsingGETPath = '/gestiondestock/v1/articles/filter/category/{idCategory}';
  static readonly findByCodeArticleUsingGETPath = '/gestiondestock/v1/articles/filter/{codeArticle}';
  static readonly findHistoriqueCommandeClientUsingGETPath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueCommandeFournisseurUsingGETPath = '/gestiondestock/v1/articles/historique/commandefournisseur/{idArticle}';
  static readonly findHistoriqueVentesUsingGETPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
  static readonly findByIdUsingGETPath = '/gestiondestock/v1/articles/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<ArticleDto>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un article
   * @param dto dto
   * @return L'objet article cree / modifie
   */
  saveUsingPOSTResponse(dto: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un article
   * @param dto dto
   * @return L'objet article cree / modifie
   */
  saveUsingPOST(dto: ArticleDto): __Observable<ArticleDto> {
    return this.saveUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @param idArticle idArticle
   */
  deleteUsingDELETEResponse(idArticle: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/articles/delete/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idArticle idArticle
   */
  deleteUsingDELETE(idArticle: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idCategory idCategory
   * @return OK
   */
  findAllArticleByIdCategoryUsingGETResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/category/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @param idCategory idCategory
   * @return OK
   */
  findAllArticleByIdCategoryUsingGET(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryUsingGETResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @param codeArticle codeArticle
   * @return OK
   */
  findByCodeArticleUsingGETResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/${codeArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * @param codeArticle codeArticle
   * @return OK
   */
  findByCodeArticleUsingGET(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleUsingGETResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeClientUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeclient/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeClientUsingGET(idArticle: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeFournisseurUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandefournisseur/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeFournisseurUsingGET(idArticle: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueVentesUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/vente/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueVentesUsingGET(idArticle: number): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * @param idArticle idArticle
   * @return OK
   */
  findByIdUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * @param idArticle idArticle
   * @return OK
   */
  findByIdUsingGET(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module ArticleControllerService {
}

export { ArticleControllerService }

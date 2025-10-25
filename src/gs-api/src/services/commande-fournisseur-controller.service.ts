/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDtoRes } from '../models/commande-fournisseur-dto-res';
import { CommandeFournisseurDtoReq } from '../models/commande-fournisseur-dto-req';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';

/**
 * Commande Fournisseur Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommandeFournisseurControllerService extends __BaseService {
  static readonly findAllUsingGET4Path = '/gestiondestock/v1/commandesfournisseurs/all';
  static readonly saveUsingPOST4Path = '/gestiondestock/v1/commandesfournisseurs/create';
  static readonly deleteArticleUsingDELETE1Path = '/gestiondestock/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteUsingDELETE4Path = '/gestiondestock/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';
  static readonly findByCodeUsingGET2Path = '/gestiondestock/v1/commandesfournisseurs/filter/{codeCommandeFournisseur}';
  static readonly findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGETPath = '/gestiondestock/v1/commandesfournisseurs/lignesCommande/{idCommande}';
  static readonly updateArticleUsingPATCH1Path = '/gestiondestock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandeUsingPATCH1Path = '/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateFournisseurUsingPATCHPath = '/gestiondestock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly updateQuantiteCommandeUsingPATCH1Path = '/gestiondestock/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdUsingGET4Path = '/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDtoRes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDtoRes>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET4(): __Observable<Array<CommandeFournisseurDtoRes>> {
    return this.findAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDtoRes>)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST4Response(dto: CommandeFournisseurDtoReq): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST4(dto: CommandeFournisseurDtoReq): __Observable<CommandeFournisseurDtoRes> {
    return this.saveUsingPOST4Response(dto).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param params The `CommandeFournisseurControllerService.DeleteArticleUsingDELETE1Params` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  deleteArticleUsingDELETE1Response(params: CommandeFournisseurControllerService.DeleteArticleUsingDELETE1Params): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/article/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseurControllerService.DeleteArticleUsingDELETE1Params` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  deleteArticleUsingDELETE1(params: CommandeFournisseurControllerService.DeleteArticleUsingDELETE1Params): __Observable<CommandeFournisseurDtoRes> {
    return this.deleteArticleUsingDELETE1Response(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param idCommandeFournisseur idCommandeFournisseur
   */
  deleteUsingDELETE4Response(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/${idCommandeFournisseur}`,
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
   * @param idCommandeFournisseur idCommandeFournisseur
   */
  deleteUsingDELETE4(idCommandeFournisseur: number): __Observable<null> {
    return this.deleteUsingDELETE4Response(idCommandeFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCommandeFournisseur codeCommandeFournisseur
   * @return OK
   */
  findByCodeUsingGET2Response(codeCommandeFournisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/filter/${codeCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param codeCommandeFournisseur codeCommandeFournisseur
   * @return OK
   */
  findByCodeUsingGET2(codeCommandeFournisseur: string): __Observable<CommandeFournisseurDtoRes> {
    return this.findByCodeUsingGET2Response(codeCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param idCommande idCommande
   * @return OK
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGETResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/lignesCommande/${idCommande}`,
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
   * @param idCommande idCommande
   * @return OK
   */
  findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGET(idCommande: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLignesCommandesFournisseurByCommandeFournisseurIdUsingGETResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param params The `CommandeFournisseurControllerService.UpdateArticleUsingPATCH1Params` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * - `idArticle`: idArticle
   *
   * @return OK
   */
  updateArticleUsingPATCH1Response(params: CommandeFournisseurControllerService.UpdateArticleUsingPATCH1Params): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/article/${params.idCommande}/${params.idLigneCommande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseurControllerService.UpdateArticleUsingPATCH1Params` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * - `idArticle`: idArticle
   *
   * @return OK
   */
  updateArticleUsingPATCH1(params: CommandeFournisseurControllerService.UpdateArticleUsingPATCH1Params): __Observable<CommandeFournisseurDtoRes> {
    return this.updateArticleUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param params The `CommandeFournisseurControllerService.UpdateEtatCommandeUsingPATCH1Params` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCH1Response(params: CommandeFournisseurControllerService.UpdateEtatCommandeUsingPATCH1Params): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseurControllerService.UpdateEtatCommandeUsingPATCH1Params` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCH1(params: CommandeFournisseurControllerService.UpdateEtatCommandeUsingPATCH1Params): __Observable<CommandeFournisseurDtoRes> {
    return this.updateEtatCommandeUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param params The `CommandeFournisseurControllerService.UpdateFournisseurUsingPATCHParams` containing the following parameters:
   *
   * - `idFournisseur`: idFournisseur
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateFournisseurUsingPATCHResponse(params: CommandeFournisseurControllerService.UpdateFournisseurUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/fournisseur/${params.idCommande}/${params.idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseurControllerService.UpdateFournisseurUsingPATCHParams` containing the following parameters:
   *
   * - `idFournisseur`: idFournisseur
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateFournisseurUsingPATCH(params: CommandeFournisseurControllerService.UpdateFournisseurUsingPATCHParams): __Observable<CommandeFournisseurDtoRes> {
    return this.updateFournisseurUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param params The `CommandeFournisseurControllerService.UpdateQuantiteCommandeUsingPATCH1Params` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCH1Response(params: CommandeFournisseurControllerService.UpdateQuantiteCommandeUsingPATCH1Params): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseurControllerService.UpdateQuantiteCommandeUsingPATCH1Params` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCH1(params: CommandeFournisseurControllerService.UpdateQuantiteCommandeUsingPATCH1Params): __Observable<CommandeFournisseurDtoRes> {
    return this.updateQuantiteCommandeUsingPATCH1Response(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }

  /**
   * @param idCommandeFournisseur idCommandeFournisseur
   * @return OK
   */
  findByIdUsingGET4Response(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/${idCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDtoRes>;
      })
    );
  }
  /**
   * @param idCommandeFournisseur idCommandeFournisseur
   * @return OK
   */
  findByIdUsingGET4(idCommandeFournisseur: number): __Observable<CommandeFournisseurDtoRes> {
    return this.findByIdUsingGET4Response(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDtoRes)
    );
  }
}

module CommandeFournisseurControllerService {

  /**
   * Parameters for deleteArticleUsingDELETE1
   */
  export interface DeleteArticleUsingDELETE1Params {

    /**
     * idLigneCommande
     */
    idLigneCommande: number;

    /**
     * idCommande
     */
    idCommande: number;
  }

  /**
   * Parameters for updateArticleUsingPATCH1
   */
  export interface UpdateArticleUsingPATCH1Params {

    /**
     * idLigneCommande
     */
    idLigneCommande: number;

    /**
     * idCommande
     */
    idCommande: number;

    /**
     * idArticle
     */
    idArticle: number;
  }

  /**
   * Parameters for updateEtatCommandeUsingPATCH1
   */
  export interface UpdateEtatCommandeUsingPATCH1Params {

    /**
     * idCommande
     */
    idCommande: number;

    /**
     * etatCommande
     */
    etatCommande: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  }

  /**
   * Parameters for updateFournisseurUsingPATCH
   */
  export interface UpdateFournisseurUsingPATCHParams {

    /**
     * idFournisseur
     */
    idFournisseur: number;

    /**
     * idCommande
     */
    idCommande: number;
  }

  /**
   * Parameters for updateQuantiteCommandeUsingPATCH1
   */
  export interface UpdateQuantiteCommandeUsingPATCH1Params {

    /**
     * quantite
     */
    quantite: number;

    /**
     * idLigneCommande
     */
    idLigneCommande: number;

    /**
     * idCommande
     */
    idCommande: number;
  }
}

export { CommandeFournisseurControllerService }

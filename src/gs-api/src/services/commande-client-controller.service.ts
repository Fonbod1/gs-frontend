/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDtoRes } from '../models/commande-client-dto-res';
import { CommandeClientDtoReq } from '../models/commande-client-dto-req';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';

/**
 * Commande Client Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommandeClientControllerService extends __BaseService {
  static readonly findAllUsingGET3Path = '/gestiondestock/v1/commandesclients/all';
  static readonly saveUsingPOST3Path = '/gestiondestock/v1/commandesclients/create';
  static readonly deleteArticleUsingDELETEPath = '/gestiondestock/v1/commandesclients/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteUsingDELETE3Path = '/gestiondestock/v1/commandesclients/delete/{idCommandeClient}';
  static readonly findByCodeUsingGET1Path = '/gestiondestock/v1/commandesclients/filter/{codeCommandeClient}';
  static readonly findAllLignesCommandesClientByCommandeClientIdUsingGETPath = '/gestiondestock/v1/commandesclients/lignesCommande/{idCommande}';
  static readonly updateArticleUsingPATCHPath = '/gestiondestock/v1/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateClientUsingPATCHPath = '/gestiondestock/v1/commandesclients/update/client/{idCommande}/{idClient}';
  static readonly updateEtatCommandeUsingPATCHPath = '/gestiondestock/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandeUsingPATCHPath = '/gestiondestock/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdUsingGET3Path = '/gestiondestock/v1/commandesclients/{idCommandeClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<CommandeClientDtoRes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDtoRes>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET3(): __Observable<Array<CommandeClientDtoRes>> {
    return this.findAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<CommandeClientDtoRes>)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST3Response(dto: CommandeClientDtoReq): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST3(dto: CommandeClientDtoReq): __Observable<CommandeClientDtoRes> {
    return this.saveUsingPOST3Response(dto).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param params The `CommandeClientControllerService.DeleteArticleUsingDELETEParams` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommandeClient`: idCommandeClient
   *
   * @return OK
   */
  deleteArticleUsingDELETEResponse(params: CommandeClientControllerService.DeleteArticleUsingDELETEParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/article/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeClientControllerService.DeleteArticleUsingDELETEParams` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommandeClient`: idCommandeClient
   *
   * @return OK
   */
  deleteArticleUsingDELETE(params: CommandeClientControllerService.DeleteArticleUsingDELETEParams): __Observable<CommandeClientDtoRes> {
    return this.deleteArticleUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param idCommandeClient idCommandeClient
   */
  deleteUsingDELETE3Response(idCommandeClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/${idCommandeClient}`,
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
   * @param idCommandeClient idCommandeClient
   */
  deleteUsingDELETE3(idCommandeClient: number): __Observable<null> {
    return this.deleteUsingDELETE3Response(idCommandeClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCommandeClient codeCommandeClient
   * @return OK
   */
  findByCodeUsingGET1Response(codeCommandeClient: string): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/filter/${codeCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param codeCommandeClient codeCommandeClient
   * @return OK
   */
  findByCodeUsingGET1(codeCommandeClient: string): __Observable<CommandeClientDtoRes> {
    return this.findByCodeUsingGET1Response(codeCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param idCommande idCommande
   * @return OK
   */
  findAllLignesCommandesClientByCommandeClientIdUsingGETResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/lignesCommande/${idCommande}`,
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
   * @param idCommande idCommande
   * @return OK
   */
  findAllLignesCommandesClientByCommandeClientIdUsingGET(idCommande: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientIdUsingGETResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @param params The `CommandeClientControllerService.UpdateArticleUsingPATCHParams` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * - `idArticle`: idArticle
   *
   * @return OK
   */
  updateArticleUsingPATCHResponse(params: CommandeClientControllerService.UpdateArticleUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/article/${params.idCommande}/${params.idLigneCommande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeClientControllerService.UpdateArticleUsingPATCHParams` containing the following parameters:
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * - `idArticle`: idArticle
   *
   * @return OK
   */
  updateArticleUsingPATCH(params: CommandeClientControllerService.UpdateArticleUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateArticleUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param params The `CommandeClientControllerService.UpdateClientUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `idClient`: idClient
   *
   * @return OK
   */
  updateClientUsingPATCHResponse(params: CommandeClientControllerService.UpdateClientUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/client/${params.idCommande}/${params.idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeClientControllerService.UpdateClientUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `idClient`: idClient
   *
   * @return OK
   */
  updateClientUsingPATCH(params: CommandeClientControllerService.UpdateClientUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateClientUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param params The `CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCHResponse(params: CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCH(params: CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateEtatCommandeUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param params The `CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCHResponse(params: CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param params The `CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCH(params: CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateQuantiteCommandeUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  findByIdUsingGET3Response(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/${idCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  findByIdUsingGET3(idCommandeClient: number): __Observable<CommandeClientDtoRes> {
    return this.findByIdUsingGET3Response(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }
}

module CommandeClientControllerService {

  /**
   * Parameters for deleteArticleUsingDELETE
   */
  export interface DeleteArticleUsingDELETEParams {

    /**
     * idLigneCommande
     */
    idLigneCommande: number;

    /**
     * idCommandeClient
     */
    idCommandeClient: number;
  }

  /**
   * Parameters for updateArticleUsingPATCH
   */
  export interface UpdateArticleUsingPATCHParams {

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
   * Parameters for updateClientUsingPATCH
   */
  export interface UpdateClientUsingPATCHParams {

    /**
     * idCommande
     */
    idCommande: number;

    /**
     * idClient
     */
    idClient: number;
  }

  /**
   * Parameters for updateEtatCommandeUsingPATCH
   */
  export interface UpdateEtatCommandeUsingPATCHParams {

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
   * Parameters for updateQuantiteCommandeUsingPATCH
   */
  export interface UpdateQuantiteCommandeUsingPATCHParams {

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

export { CommandeClientControllerService }

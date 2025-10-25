/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from '../models/changer-mot-de-passe-utilisateur-dto';

/**
 * Utilisateur Controller
 */
@Injectable({
  providedIn: 'root',
})
class UtilisateurControllerService extends __BaseService {
  static readonly findAllUsingGET7Path = '/gestiondestock/v1/utilisateurs/all';
  static readonly saveUsingPOST7Path = '/gestiondestock/v1/utilisateurs/create';
  static readonly deleteUsingDELETE7Path = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailUsingGETPath = '/gestiondestock/v1/utilisateurs/find/{email}';
  static readonly changerMotDePasseUsingPOSTPath = '/gestiondestock/v1/utilisateurs/update/password';
  static readonly findByIdUsingGET7Path = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGET7Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET7(): __Observable<Array<UtilisateurDto>> {
    return this.findAllUsingGET7Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST7Response(dto: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST7(dto: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveUsingPOST7Response(dto).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE7Response(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/delete/${idUtilisateur}`,
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
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE7(idUtilisateur: number): __Observable<null> {
    return this.deleteUsingDELETE7Response(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param email email
   * @return OK
   */
  findByEmailUsingGETResponse(email: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/find/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param email email
   * @return OK
   */
  findByEmailUsingGET(email: string): __Observable<UtilisateurDto> {
    return this.findByEmailUsingGETResponse(email).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  changerMotDePasseUsingPOSTResponse(dto: ChangerMotDePasseUtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/update/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  changerMotDePasseUsingPOST(dto: ChangerMotDePasseUtilisateurDto): __Observable<UtilisateurDto> {
    return this.changerMotDePasseUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET7Response(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET7(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdUsingGET7Response(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module UtilisateurControllerService {
}

export { UtilisateurControllerService }

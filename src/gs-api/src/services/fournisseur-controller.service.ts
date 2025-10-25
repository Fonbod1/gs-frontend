/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';

/**
 * Fournisseur Controller
 */
@Injectable({
  providedIn: 'root',
})
class FournisseurControllerService extends __BaseService {
  static readonly findAllUsingGET6Path = '/gestiondestock/v1/fournisseurs/all';
  static readonly saveUsingPOST6Path = '/gestiondestock/v1/fournisseurs/create';
  static readonly deleteUsingDELETE6Path = '/gestiondestock/v1/fournisseurs/delete/{idFournisseur}';
  static readonly findByIdUsingGET6Path = '/gestiondestock/v1/fournisseurs/{idFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGET6Response(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET6(): __Observable<Array<FournisseurDto>> {
    return this.findAllUsingGET6Response().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST6Response(dto: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST6(dto: FournisseurDto): __Observable<FournisseurDto> {
    return this.saveUsingPOST6Response(dto).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @param idFournisseur idFournisseur
   */
  deleteUsingDELETE6Response(idFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/delete/${idFournisseur}`,
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
   * @param idFournisseur idFournisseur
   */
  deleteUsingDELETE6(idFournisseur: number): __Observable<null> {
    return this.deleteUsingDELETE6Response(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idFournisseur idFournisseur
   * @return OK
   */
  findByIdUsingGET6Response(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @param idFournisseur idFournisseur
   * @return OK
   */
  findByIdUsingGET6(idFournisseur: number): __Observable<FournisseurDto> {
    return this.findByIdUsingGET6Response(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
}

module FournisseurControllerService {
}

export { FournisseurControllerService }

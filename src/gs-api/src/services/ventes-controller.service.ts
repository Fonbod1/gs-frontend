/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';

/**
 * Ventes Controller
 */
@Injectable({
  providedIn: 'root',
})
class VentesControllerService extends __BaseService {
  static readonly findAllUsingGET8Path = '/gestiondestock/v1/ventes/all';
  static readonly findByCodeUsingGET3Path = '/gestiondestock/v1/ventes/code/{codeVente}';
  static readonly saveUsingPOST8Path = '/gestiondestock/v1/ventes/create';
  static readonly deleteUsingDELETE8Path = '/gestiondestock/v1/ventes/delete/{idVente}';
  static readonly findByIdUsingGET8Path = '/gestiondestock/v1/ventes/{idVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  findAllUsingGET8Response(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  findAllUsingGET8(): __Observable<Array<VentesDto>> {
    return this.findAllUsingGET8Response().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }

  /**
   * @param codeVente codeVente
   * @return OK
   */
  findByCodeUsingGET3Response(codeVente: string): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/code/${codeVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param codeVente codeVente
   * @return OK
   */
  findByCodeUsingGET3(codeVente: string): __Observable<VentesDto> {
    return this.findByCodeUsingGET3Response(codeVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST8Response(dto: VentesDto): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param dto dto
   * @return OK
   */
  saveUsingPOST8(dto: VentesDto): __Observable<VentesDto> {
    return this.saveUsingPOST8Response(dto).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param idVente idVente
   */
  deleteUsingDELETE8Response(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/ventes/delete/${idVente}`,
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
   * @param idVente idVente
   */
  deleteUsingDELETE8(idVente: number): __Observable<null> {
    return this.deleteUsingDELETE8Response(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idVente idVente
   * @return OK
   */
  findByIdUsingGET8Response(idVente: number): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param idVente idVente
   * @return OK
   */
  findByIdUsingGET8(idVente: number): __Observable<VentesDto> {
    return this.findByIdUsingGET8Response(idVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
}

module VentesControllerService {
}

export { VentesControllerService }

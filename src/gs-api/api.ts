/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ArticleDto {
  /** @format int32 */
  id?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
  /** @format int32 */
  idEntreprise?: number;
}

export interface CategoryDto {
  /** @format int32 */
  id?: number;
  code?: string;
  designation?: string;
  /** @format int32 */
  idEntreprise?: number;
}

export interface LigneVenteDto {
  /** @format int32 */
  id?: number;
  vente?: VentesDto;
  article?: ArticleDto;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export interface VentesDto {
  /** @format int32 */
  id?: number;
  code?: string;
  /** @format date-time */
  dateVente?: string;
  commentaire?: string;
  ligneVentes?: LigneVenteDto[];
  /** @format int32 */
  idEntreprise?: number;
}

export interface ChangerMotDePasseUtilisateurDto {
  /** @format int32 */
  id?: number;
  motDePasse?: string;
  confirmMotDePasse?: string;
}

export interface AdresseDto {
  adresse1?: string;
  adresse2?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
}

export interface EntrepriseDto {
  /** @format int32 */
  id?: number;
  nom?: string;
  description?: string;
  adresse?: AdresseDto;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
}

export interface RolesDto {
  /** @format int32 */
  id?: number;
  roleName?: string;
}

export interface UtilisateurDto {
  /** @format int32 */
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  /** @format date-time */
  dateDeNaissance?: string;
  motDePasse?: string;
  adresse?: AdresseDto;
  photo?: string;
  entreprise?: EntrepriseDto;
  roles?: RolesDto[];
}

export interface FournisseurDto {
  /** @format int32 */
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  photo?: string;
  mail?: string;
  numTel?: string;
  /** @format int32 */
  idEntreprise?: number;
}

export interface Adresse {
  adresse1?: string;
  adresse2?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
}

export interface Article {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  /** @format int32 */
  idEntreprise?: number;
  category?: Category;
  ligneVentes?: LigneVente[];
  ligneCommandeClients?: LigneCommandeClient[];
  ligneCommandeFournisseurs?: LigneCommandeFournisseur[];
  mvtStks?: MvtStk[];
}

export interface Category {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  code?: string;
  designation?: string;
  /** @format int32 */
  idEntreprise?: number;
  articles?: Article[];
}

export interface Client {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  mail?: string;
  numTel?: string;
  /** @format int32 */
  idEntreprise?: number;
  commandeClients?: CommandeClient[];
}

export interface CommandeClient {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  code?: string;
  /** @format date-time */
  dateCommande?: string;
  etatCommande?: "EN_PREPARATION" | "VALIDEE" | "LIVREE";
  /** @format int32 */
  idEntreprise?: number;
  client?: Client;
  ligneCommandeClients?: LigneCommandeClient[];
}

export interface CommandeFournisseur {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  code?: string;
  /** @format date-time */
  dateCommande?: string;
  etatCommande?: "EN_PREPARATION" | "VALIDEE" | "LIVREE";
  /** @format int32 */
  idEntreprise?: number;
  fournisseur?: Fournisseur;
  ligneCommandeFournisseurs?: LigneCommandeFournisseur[];
}

export interface CommandeFournisseurDto {
  /** @format int32 */
  id?: number;
  code?: string;
  /** @format date-time */
  dateCommande?: string;
  etatCommande?: "EN_PREPARATION" | "VALIDEE" | "LIVREE";
  fournisseur?: FournisseurDto;
  /** @format int32 */
  idEntreprise?: number;
  ligneCommandeFournisseurs?: LigneCommandeFournisseurDto[];
  commandeLivree?: boolean;
}

export interface Fournisseur {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  mail?: string;
  numTel?: string;
  /** @format int32 */
  idEntreprise?: number;
  commandeFournisseurs?: CommandeFournisseur[];
}

export interface LigneCommandeClient {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  article?: any;
  commandeClient?: CommandeClient;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export interface LigneCommandeFournisseur {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export interface LigneCommandeFournisseurDto {
  /** @format int32 */
  id?: number;
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseur;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export interface LigneVente {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  vente?: Ventes;
  article?: any;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export interface MvtStk {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  /** @format date-time */
  dateMvt?: string;
  quantite?: number;
  article?: any;
  typeMvt?: "ENTREE" | "SORTIE" | "CORRECTION_POS" | "CORRECTION_NEG";
  sourceMvt?: "COMMANDE_CLIENT" | "COMMANDE_FOURNISSEUR" | "VENTE";
  /** @format int32 */
  idEntreprise?: number;
}

export interface Ventes {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  /** @format date-time */
  lastModifiedDate?: string;
  code?: string;
  /** @format date-time */
  dateVente?: string;
  commentaire?: string;
  /** @format int32 */
  idEntreprise?: number;
  ligneVentes?: LigneVente[];
}

export interface AuthenticationRequest {
  login?: string;
  password?: string;
}

export interface AuthenticationResponse {
  accessToken?: string;
}

export interface MvtStkDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  dateMvt?: string;
  quantite?: number;
  article?: ArticleDto;
  typeMvt?: "ENTREE" | "SORTIE" | "CORRECTION_POS" | "CORRECTION_NEG";
  sourceMvt?: "COMMANDE_CLIENT" | "COMMANDE_FOURNISSEUR" | "VENTE";
  /** @format int32 */
  idEntreprise?: number;
}

export interface ClientDto {
  /** @format int32 */
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  photo?: string;
  mail?: string;
  numTel?: string;
  /** @format int32 */
  idEntreprise?: number;
}

export interface CommandeClientDto {
  /** @format int32 */
  id?: number;
  code?: string;
  /** @format date-time */
  dateCommande?: string;
  etatCommande?: "EN_PREPARATION" | "VALIDEE" | "LIVREE";
  client?: ClientDto;
  /** @format int32 */
  idEntreprise?: number;
  ligneCommandeClients?: LigneCommandeClientDto[];
  commandeLivree?: boolean;
}

export interface LigneCommandeClientDto {
  /** @format int32 */
  id?: number;
  article?: ArticleDto;
  quantite?: number;
  prixUnitaire?: number;
  /** @format int32 */
  idEntreprise?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8081";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Stock Management REST API
 * @version v1
 * @baseUrl http://localhost:8081
 *
 * Stock Management API documentation
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  gestiondestock = {
    /**
     * No description
     *
     * @tags Ventes
     * @name Save
     * @summary Créer ou modifier une vente
     * @request POST:/gestiondestock/v1/ventes/create
     * @secure
     */
    save: (data: VentesDto, params: RequestParams = {}) =>
      this.request<VentesDto, VentesDto>({
        path: `/gestiondestock/v1/ventes/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilisateurs
     * @name ChangerMotDePasse
     * @summary Changer le mot de passe d'un utilisateur
     * @request POST:/gestiondestock/v1/utilisateurs/update/password
     * @secure
     */
    changerMotDePasse: (
      data: ChangerMotDePasseUtilisateurDto,
      params: RequestParams = {},
    ) =>
      this.request<UtilisateurDto, UtilisateurDto>({
        path: `/gestiondestock/v1/utilisateurs/update/password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Permet d'enregistrer ou modifier un utilisateur
     *
     * @tags Utilisateurs
     * @name Save1
     * @summary Créer ou modifier un utilisateur
     * @request POST:/gestiondestock/v1/utilisateurs/create
     * @secure
     */
    save1: (data: UtilisateurDto, params: RequestParams = {}) =>
      this.request<UtilisateurDto, UtilisateurDto>({
        path: `/gestiondestock/v1/utilisateurs/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Créer ou mettre à jour un fournisseur
     *
     * @tags Fournisseurs
     * @name Save2
     * @summary Créer un fournisseur
     * @request POST:/gestiondestock/v1/fournisseurs/create
     * @secure
     */
    save2: (data: FournisseurDto, params: RequestParams = {}) =>
      this.request<FournisseurDto, FournisseurDto>({
        path: `/gestiondestock/v1/fournisseurs/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Permet d'enregistrer ou de modifier une entreprise
     *
     * @tags Entreprises
     * @name Save3
     * @summary Créer une entreprise
     * @request POST:/gestiondestock/v1/entreprises/create
     * @secure
     */
    save3: (data: EntrepriseDto, params: RequestParams = {}) =>
      this.request<EntrepriseDto, EntrepriseDto>({
        path: `/gestiondestock/v1/entreprises/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Créer ou modifier une commande fournisseur
     *
     * @tags Commandes Fournisseurs
     * @name Save4
     * @summary Créer une commande fournisseur
     * @request POST:/gestiondestock/v1/commandesfournisseurs/create
     * @secure
     */
    save4: (data: CommandeFournisseurDto, params: RequestParams = {}) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Cette methode permet d'enregistrer ou modifier une categorie
     *
     * @tags Categories
     * @name Save5
     * @summary Enregistrer une categorie
     * @request POST:/gestiondestock/v1/categories/create
     * @secure
     */
    save5: (data: CategoryDto, params: RequestParams = {}) =>
      this.request<CategoryDto, CategoryDto>({
        path: `/gestiondestock/v1/categories/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name Authenticate
     * @request POST:/gestiondestock/v1/auth/authenticate
     * @secure
     */
    authenticate: (data: AuthenticationRequest, params: RequestParams = {}) =>
      this.request<AuthenticationResponse, any>({
        path: `/gestiondestock/v1/auth/authenticate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name UpdateQuantiteCommande
     * @summary Mettre à jour la quantité d'un article dans la commande fournisseur
     * @request PATCH:/gestiondestock/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}
     * @secure
     */
    updateQuantiteCommande: (
      idCommande: number,
      idLigneCommande: number,
      quantite: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/update/quantite/${idCommande}/${idLigneCommande}/${quantite}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name UpdateFournisseur
     * @summary Changer le fournisseur d'une commande
     * @request PATCH:/gestiondestock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}
     * @secure
     */
    updateFournisseur: (
      idCommande: number,
      idFournisseur: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/update/fournisseur/${idCommande}/${idFournisseur}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name UpdateEtatCommande
     * @summary Mettre à jour l'état d'une commande fournisseur
     * @request PATCH:/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}
     * @secure
     */
    updateEtatCommande: (
      idCommande: number,
      etatCommande: "EN_PREPARATION" | "VALIDEE" | "LIVREE",
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/update/etat/${idCommande}/${etatCommande}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name UpdateArticle
     * @summary Mettre à jour l'article dans une ligne de commande fournisseur
     * @request PATCH:/gestiondestock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}
     * @secure
     */
    updateArticle: (
      idCommande: number,
      idLigneCommande: number,
      idArticle: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/update/article/${idCommande}/${idLigneCommande}/${idArticle}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ventes
     * @name FindById
     * @summary Rechercher une vente par ID
     * @request GET:/gestiondestock/v1/ventes/{idVente}
     * @secure
     */
    findById: (idVente: number, params: RequestParams = {}) =>
      this.request<VentesDto, VentesDto>({
        path: `/gestiondestock/v1/ventes/${idVente}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ventes
     * @name FindByCode
     * @summary Rechercher une vente par code
     * @request GET:/gestiondestock/v1/ventes/{codeVente}
     * @secure
     */
    findByCode: (codeVente: string, params: RequestParams = {}) =>
      this.request<VentesDto, VentesDto>({
        path: `/gestiondestock/v1/ventes/${codeVente}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ventes
     * @name FindAll
     * @summary Lister toutes les ventes
     * @request GET:/gestiondestock/v1/ventes/all
     * @secure
     */
    findAll: (params: RequestParams = {}) =>
      this.request<VentesDto[], any>({
        path: `/gestiondestock/v1/ventes/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilisateurs
     * @name FindById1
     * @summary Rechercher un utilisateur par ID
     * @request GET:/gestiondestock/v1/utilisateurs/{idUtilisateur}
     * @secure
     */
    findById1: (idUtilisateur: number, params: RequestParams = {}) =>
      this.request<UtilisateurDto, UtilisateurDto>({
        path: `/gestiondestock/v1/utilisateurs/${idUtilisateur}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilisateurs
     * @name FindByEmail
     * @summary Rechercher un utilisateur par email
     * @request GET:/gestiondestock/v1/utilisateurs/find/{email}
     * @secure
     */
    findByEmail: (email: string, params: RequestParams = {}) =>
      this.request<UtilisateurDto, UtilisateurDto>({
        path: `/gestiondestock/v1/utilisateurs/find/${email}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilisateurs
     * @name FindAll1
     * @summary Lister tous les utilisateurs
     * @request GET:/gestiondestock/v1/utilisateurs/all
     * @secure
     */
    findAll1: (params: RequestParams = {}) =>
      this.request<UtilisateurDto[], any>({
        path: `/gestiondestock/v1/utilisateurs/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fournisseurs
     * @name FindById2
     * @summary Rechercher un fournisseur par ID
     * @request GET:/gestiondestock/v1/fournisseurs/{idFournisseur}
     * @secure
     */
    findById2: (idFournisseur: number, params: RequestParams = {}) =>
      this.request<FournisseurDto, FournisseurDto>({
        path: `/gestiondestock/v1/fournisseurs/${idFournisseur}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fournisseurs
     * @name FindAll2
     * @summary Lister tous les fournisseurs
     * @request GET:/gestiondestock/v1/fournisseurs/all
     * @secure
     */
    findAll2: (params: RequestParams = {}) =>
      this.request<FournisseurDto[], any>({
        path: `/gestiondestock/v1/fournisseurs/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Retourne une entreprise en fonction de son ID
     *
     * @tags Entreprises
     * @name FindById3
     * @summary Rechercher une entreprise par ID
     * @request GET:/gestiondestock/v1/entreprises/{idEntreprise}
     * @secure
     */
    findById3: (idEntreprise: number, params: RequestParams = {}) =>
      this.request<EntrepriseDto, EntrepriseDto>({
        path: `/gestiondestock/v1/entreprises/${idEntreprise}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Retourne la liste de toutes les entreprises
     *
     * @tags Entreprises
     * @name FindAll3
     * @summary Lister toutes les entreprises
     * @request GET:/gestiondestock/v1/entreprises/all
     * @secure
     */
    findAll3: (params: RequestParams = {}) =>
      this.request<EntrepriseDto[], any>({
        path: `/gestiondestock/v1/entreprises/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name FindById4
     * @summary Rechercher une commande fournisseur par ID
     * @request GET:/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}
     * @secure
     */
    findById4: (idCommandeFournisseur: number, params: RequestParams = {}) =>
      this.request<CommandeFournisseurDto, CommandeFournisseurDto>({
        path: `/gestiondestock/v1/commandesfournisseurs/${idCommandeFournisseur}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name FindAllLignesCommandesFournisseurByCommandeFournisseurId
     * @summary Lister toutes les lignes d'une commande fournisseur
     * @request GET:/gestiondestock/v1/commandesfournisseurs/lignesCommande/{idCommande}
     * @secure
     */
    findAllLignesCommandesFournisseurByCommandeFournisseurId: (
      idCommande: number,
      params: RequestParams = {},
    ) =>
      this.request<LigneCommandeFournisseurDto[], any>({
        path: `/gestiondestock/v1/commandesfournisseurs/lignesCommande/${idCommande}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name FindByCode1
     * @summary Rechercher une commande fournisseur par code
     * @request GET:/gestiondestock/v1/commandesfournisseurs/filter/{codeCommandeFournisseur}
     * @secure
     */
    findByCode1: (
      codeCommandeFournisseur: string,
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/filter/${codeCommandeFournisseur}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name FindAll4
     * @summary Lister toutes les commandes fournisseurs
     * @request GET:/gestiondestock/v1/commandesfournisseurs/all
     * @secure
     */
    findAll4: (params: RequestParams = {}) =>
      this.request<CommandeFournisseurDto[], any>({
        path: `/gestiondestock/v1/commandesfournisseurs/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Cette methode permet de chercher une categorie par son ID
     *
     * @tags Categories
     * @name FindById5
     * @summary Rechercher une categorie par ID
     * @request GET:/gestiondestock/v1/categories/{idCategory}
     * @secure
     */
    findById5: (idCategory: number, params: RequestParams = {}) =>
      this.request<CategoryDto, CategoryDto>({
        path: `/gestiondestock/v1/categories/${idCategory}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cette methode permet de chercher une categorie par son CODE
     *
     * @tags Categories
     * @name FindByCode2
     * @summary Rechercher une categorie par CODE
     * @request GET:/gestiondestock/v1/categories/filter/{codeCategory}
     * @secure
     */
    findByCode2: (codeCategory: string, params: RequestParams = {}) =>
      this.request<CategoryDto, CategoryDto>({
        path: `/gestiondestock/v1/categories/filter/${codeCategory}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cette methode permet de renvoyer la liste des categories dans la BDD
     *
     * @tags Categories
     * @name FindAll5
     * @summary Renvoi la liste des categories
     * @request GET:/gestiondestock/v1/categories/all
     * @secure
     */
    findAll5: (params: RequestParams = {}) =>
      this.request<CategoryDto[], any>({
        path: `/gestiondestock/v1/categories/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ventes
     * @name Delete
     * @summary Supprimer une vente par ID
     * @request DELETE:/gestiondestock/v1/ventes/delete/{idVente}
     * @secure
     */
    delete: (idVente: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/ventes/delete/${idVente}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilisateurs
     * @name Delete1
     * @summary Supprimer un utilisateur par ID
     * @request DELETE:/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}
     * @secure
     */
    delete1: (idUtilisateur: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/utilisateurs/delete/${idUtilisateur}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fournisseurs
     * @name Delete2
     * @summary Supprimer un fournisseur par ID
     * @request DELETE:/gestiondestock/v1/fournisseurs/delete/{idFournisseur}
     * @secure
     */
    delete2: (idFournisseur: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/fournisseurs/delete/${idFournisseur}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Supprime une entreprise à partir de son ID
     *
     * @tags Entreprises
     * @name Delete3
     * @summary Supprimer une entreprise
     * @request DELETE:/gestiondestock/v1/entreprises/delete/{idEntreprise}
     * @secure
     */
    delete3: (idEntreprise: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/entreprises/delete/${idEntreprise}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name Delete4
     * @summary Supprimer une commande fournisseur
     * @request DELETE:/gestiondestock/v1/commandesfournisseurs/delete/{idCommandeFournisseur}
     * @secure
     */
    delete4: (idCommandeFournisseur: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/delete/${idCommandeFournisseur}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Fournisseurs
     * @name DeleteArticle
     * @summary Supprimer un article d'une commande fournisseur
     * @request DELETE:/gestiondestock/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}
     * @secure
     */
    deleteArticle: (
      idCommande: number,
      idLigneCommande: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeFournisseurDto, any>({
        path: `/gestiondestock/v1/commandesfournisseurs/delete/article/${idCommande}/${idLigneCommande}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Cette methode permet de supprimer une categorie par ID
     *
     * @tags Categories
     * @name Delete5
     * @summary Supprimer une categorie
     * @request DELETE:/gestiondestock/v1/categories/delete/{idCategory}
     * @secure
     */
    delete5: (idCategory: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/gestiondestock/v1/categories/delete/${idCategory}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  api = {
    /**
     * @description Cette méthode permet d'enregistrer une photo pour un article, client, fournisseur, etc. selon le contexte
     *
     * @tags Photos
     * @name SavePhoto
     * @summary Enregistrer une photo
     * @request POST:/api/save/{id}/{title}/{context}
     * @secure
     */
    savePhoto: (
      context: string,
      id: number,
      title: string,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/save/${id}/${title}/${context}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name SortieStock
     * @summary Enregistrer une sortie de stock
     * @request POST:/api/mvtstk/sortie
     * @secure
     */
    sortieStock: (data: MvtStkDto, params: RequestParams = {}) =>
      this.request<MvtStkDto, any>({
        path: `/api/mvtstk/sortie`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name EntreeStock
     * @summary Enregistrer une entrée de stock
     * @request POST:/api/mvtstk/entree
     * @secure
     */
    entreeStock: (data: MvtStkDto, params: RequestParams = {}) =>
      this.request<MvtStkDto, any>({
        path: `/api/mvtstk/entree`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name CorrectionStockPos
     * @summary Enregistrer une correction de stock positive
     * @request POST:/api/mvtstk/correctionpos
     * @secure
     */
    correctionStockPos: (data: MvtStkDto, params: RequestParams = {}) =>
      this.request<MvtStkDto, any>({
        path: `/api/mvtstk/correctionpos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name CorrectionStockNeg
     * @summary Enregistrer une correction de stock négative
     * @request POST:/api/mvtstk/correctionneg
     * @secure
     */
    correctionStockNeg: (data: MvtStkDto, params: RequestParams = {}) =>
      this.request<MvtStkDto, any>({
        path: `/api/mvtstk/correctionneg`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Créer ou enregistrer une nouvelle commande client
     *
     * @tags Commandes Clients
     * @name Save6
     * @summary Créer une commande client
     * @request POST:/api/commandesclients/create
     * @secure
     */
    save6: (data: CommandeClientDto, params: RequestParams = {}) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Permet d'enregistrer ou de modifier un client
     *
     * @tags Clients
     * @name Save7
     * @summary Créer un client
     * @request POST:/api/clients/create
     * @secure
     */
    save7: (data: ClientDto, params: RequestParams = {}) =>
      this.request<ClientDto, ClientDto>({
        path: `/api/clients/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method allows you to save or modify an article.
     *
     * @tags articles
     * @name Save8
     * @summary Save an article
     * @request POST:/api/articles/create
     * @secure
     */
    save8: (data: ArticleDto, params: RequestParams = {}) =>
      this.request<ArticleDto, void>({
        path: `/api/articles/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name UpdateQuantiteCommande1
     * @summary Mettre à jour la quantité d'un article dans la commande
     * @request PATCH:/api/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}
     * @secure
     */
    updateQuantiteCommande1: (
      idCommande: number,
      idLigneCommande: number,
      quantite: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/update/quantite/${idCommande}/${idLigneCommande}/${quantite}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name UpdateEtatCommande1
     * @summary Mettre à jour l'état d'une commande
     * @request PATCH:/api/commandesclients/update/etat/{idCommande}/{etatCommande}
     * @secure
     */
    updateEtatCommande1: (
      idCommande: number,
      etatCommande: "EN_PREPARATION" | "VALIDEE" | "LIVREE",
      params: RequestParams = {},
    ) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/update/etat/${idCommande}/${etatCommande}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name UpdateClient
     * @summary Changer le client associé à une commande
     * @request PATCH:/api/commandesclients/update/client/{idCommande}/{idClient}
     * @secure
     */
    updateClient: (
      idCommande: number,
      idClient: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/update/client/${idCommande}/${idClient}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name UpdateArticle1
     * @summary Mettre à jour l'article dans une ligne de commande
     * @request PATCH:/api/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}
     * @secure
     */
    updateArticle1: (
      idCommande: number,
      idLigneCommande: number,
      idArticle: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/update/article/${idCommande}/${idLigneCommande}/${idArticle}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name StockReelArticle
     * @summary Consulter le stock réel d’un article
     * @request GET:/api/mvtstk/stockreel/{idArticle}
     * @secure
     */
    stockReelArticle: (idArticle: number, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/mvtstk/stockreel/${idArticle}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mouvements de Stock
     * @name MvtStkArticle
     * @summary Lister les mouvements de stock d’un article
     * @request GET:/api/mvtstk/filter/article/{idArticle}
     * @secure
     */
    mvtStkArticle: (idArticle: number, params: RequestParams = {}) =>
      this.request<MvtStkDto[], any>({
        path: `/api/mvtstk/filter/article/${idArticle}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name FindById6
     * @summary Rechercher une commande client par ID
     * @request GET:/api/commandesclients/{idCommandeClient}
     * @secure
     */
    findById6: (idCommandeClient: string, params: RequestParams = {}) =>
      this.request<CommandeClientDto, CommandeClientDto>({
        path: `/api/commandesclients/${idCommandeClient}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name FindAllLignesCommandesClientByCommandeClientId
     * @summary Lister toutes les lignes d'une commande client
     * @request GET:/api/commandesclients/lignesCommande/{idCommande}
     * @secure
     */
    findAllLignesCommandesClientByCommandeClientId: (
      idCommande: number,
      params: RequestParams = {},
    ) =>
      this.request<LigneCommandeClientDto[], any>({
        path: `/api/commandesclients/lignesCommande/${idCommande}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name FindByCode3
     * @summary Rechercher une commande client par code
     * @request GET:/api/commandesclients/filter/{codeCommandeClient}
     * @secure
     */
    findByCode3: (codeCommandeClient: string, params: RequestParams = {}) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/filter/${codeCommandeClient}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name FindAll6
     * @summary Lister toutes les commandes clients
     * @request GET:/api/commandesclients/all
     * @secure
     */
    findAll6: (params: RequestParams = {}) =>
      this.request<CommandeClientDto[], any>({
        path: `/api/commandesclients/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Retourne un client à partir de son identifiant
     *
     * @tags Clients
     * @name FindById7
     * @summary Rechercher un client par ID
     * @request GET:/api/clients/{idClient}
     * @secure
     */
    findById7: (idClient: number, params: RequestParams = {}) =>
      this.request<ClientDto, ClientDto>({
        path: `/api/clients/${idClient}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retourne la liste de tous les clients
     *
     * @tags Clients
     * @name FindAll7
     * @summary Lister tous les clients
     * @request GET:/api/clients/all
     * @secure
     */
    findAll7: (params: RequestParams = {}) =>
      this.request<ClientDto[], any>({
        path: `/api/clients/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This method allows you to find an article by its ID.
     *
     * @tags articles
     * @name FindById8
     * @summary Find an article by ID
     * @request GET:/api/articles/{idArticle}
     * @secure
     */
    findById8: (idArticle: number, params: RequestParams = {}) =>
      this.request<ArticleDto, void>({
        path: `/api/articles/${idArticle}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finds the sales history for a specific article.
     *
     * @tags articles
     * @name FindHistoriqueVentes
     * @summary Get sales history for an article
     * @request GET:/api/articles/historique/vente/{idArticle}
     * @secure
     */
    findHistoriqueVentes: (idArticle: number, params: RequestParams = {}) =>
      this.request<LigneVenteDto[], any>({
        path: `/api/articles/historique/vente/${idArticle}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finds the supplier order history for a specific article.
     *
     * @tags articles
     * @name FindHistoriqueCommandeFournisseur
     * @summary Get supplier order history for an article
     * @request GET:/api/articles/historique/commandefournisseur/{idArticle}
     * @secure
     */
    findHistoriqueCommandeFournisseur: (
      idArticle: number,
      params: RequestParams = {},
    ) =>
      this.request<LigneCommandeFournisseurDto[], any>({
        path: `/api/articles/historique/commandefournisseur/${idArticle}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finds the customer order history for a specific article.
     *
     * @tags articles
     * @name FindHistoriaueCommandeClient
     * @summary Get customer order history for an article
     * @request GET:/api/articles/historique/commandeclient/{idArticle}
     * @secure
     */
    findHistoriaueCommandeClient: (
      idArticle: number,
      params: RequestParams = {},
    ) =>
      this.request<LigneCommandeClientDto[], any>({
        path: `/api/articles/historique/commandeclient/${idArticle}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This method allows you to find an article by its CODE.
     *
     * @tags articles
     * @name FindByCodeArticle
     * @summary Find an article by CODE
     * @request GET:/api/articles/filter/{codeArticle}
     * @secure
     */
    findByCodeArticle: (codeArticle: string, params: RequestParams = {}) =>
      this.request<ArticleDto, void>({
        path: `/api/articles/filter/${codeArticle}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Finds all articles belonging to a specific category.
     *
     * @tags articles
     * @name FindAllArticleByIdCategory
     * @summary Filter articles by category
     * @request GET:/api/articles/filter/category/{idCategory}
     * @secure
     */
    findAllArticleByIdCategory: (
      idCategory: number,
      params: RequestParams = {},
    ) =>
      this.request<ArticleDto[], any>({
        path: `/api/articles/filter/category/${idCategory}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This method allows you to find and return the list of existing articles in the database.
     *
     * @tags articles
     * @name FindAll8
     * @summary Return the list of articles
     * @request GET:/api/articles/all
     * @secure
     */
    findAll8: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/articles/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name Delete6
     * @summary Supprimer une commande client
     * @request DELETE:/api/commandesclients/delete/{idCommandeClient}
     * @secure
     */
    delete6: (idCommandeClient: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/commandesclients/delete/${idCommandeClient}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Commandes Clients
     * @name DeleteArticle1
     * @summary Supprimer un article d'une commande client
     * @request DELETE:/api/commandesclients/delete/article/{idCommande}/{idLigneCommande}
     * @secure
     */
    deleteArticle1: (
      idCommande: number,
      idLigneCommande: number,
      params: RequestParams = {},
    ) =>
      this.request<CommandeClientDto, any>({
        path: `/api/commandesclients/delete/article/${idCommande}/${idLigneCommande}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Permet de supprimer un client par ID
     *
     * @tags Clients
     * @name Delete7
     * @summary Supprimer un client
     * @request DELETE:/api/clients/delete/{idClient}
     * @secure
     */
    delete7: (idClient: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/clients/delete/${idClient}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description This method allows you to delete an article by its ID.
     *
     * @tags articles
     * @name Delete8
     * @summary Delete an article
     * @request DELETE:/api/articles/delete/{idArticle}
     * @secure
     */
    delete8: (idArticle: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/articles/delete/${idArticle}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}

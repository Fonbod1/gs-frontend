/* tslint:disable */
import { Article } from './article';
import { Ventes } from './ventes';
export interface LigneVente {
  article?: Article;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  prixUnitaire?: number;
  quantite?: number;
  vente?: Ventes;
}

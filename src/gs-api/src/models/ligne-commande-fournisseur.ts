/* tslint:disable */
import { Article } from './article';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseur {
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  prixUnitaire?: number;
  quantite?: number;
}

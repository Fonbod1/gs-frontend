/* tslint:disable */
import { Fournisseur } from './fournisseur';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
export interface CommandeFournisseur {
  code?: string;
  creationDate?: string;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  fournisseur?: Fournisseur;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
}

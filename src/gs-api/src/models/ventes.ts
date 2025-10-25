/* tslint:disable */
import { LigneVente } from './ligne-vente';
export interface Ventes {
  code?: string;
  commentaire?: string;
  creationDate?: string;
  dateVente?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  ligneVentes?: Array<LigneVente>;
}

/* tslint:disable */
import { Article } from './article';
export interface MvtStk {
  article?: Article;
  creationDate?: string;
  dateMvt?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'CORRECTION_NEG' | 'CORRECTION_POS' | 'ENTREE' | 'SORTIE';
}

/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStkDto {
  article?: ArticleDto;
  dateMvt?: string;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'CORRECTION_NEG' | 'CORRECTION_POS' | 'ENTREE' | 'SORTIE';
}

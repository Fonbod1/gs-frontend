/* tslint:disable */
import { Article } from './article';
import { CommandeClient } from './commande-client';
export interface LigneCommandeClient {
  article?: Article;
  commandeClient?: CommandeClient;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  prixUnitaire?: number;
  quantite?: number;
}

/* tslint:disable */
import { Client } from './client';
import { LigneCommandeClient } from './ligne-commande-client';
export interface CommandeClient {
  client?: Client;
  code?: string;
  creationDate?: string;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  ligneCommandeClients?: Array<LigneCommandeClient>;
}

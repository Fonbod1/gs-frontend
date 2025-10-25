/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeClient } from './commande-client';
export interface Client {
  adresse?: Adresse;
  commandeClients?: Array<CommandeClient>;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}

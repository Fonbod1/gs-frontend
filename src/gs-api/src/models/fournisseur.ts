/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeFournisseur } from './commande-fournisseur';
export interface Fournisseur {
  adresse?: Adresse;
  commandeFournisseurs?: Array<CommandeFournisseur>;
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

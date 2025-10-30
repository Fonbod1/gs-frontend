import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleDto } from '../../../gs-api/src/models/article-dto';

import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { ArticleService } from '../../services/article/article.service';
import {CommandeClientControllerService} from "../../../gs-api/src/services/commande-client-controller.service";
import {ClientDto} from "../../../gs-api/src/models/client-dto";
import {LigneCommandeClientDto} from "../../../gs-api/src/models/ligne-commande-client-dto";
import {CommandeClientDtoReq} from "../../../gs-api/src/models/commande-client-dto-req";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = '';
  selectedClientFournisseur: ClientDto | any = {};
  listClientsFournisseurs: Array<ClientDto | any> = [];

  searchedArticle: ArticleDto | null = null;
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: LigneCommandeClientDto[] = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  articleErrorMsg = '';
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cltFrsService: CltfrsService,
    private articleService: ArticleService,
    private commandeClientService: CommandeClientControllerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    this.loadClientsOrFournisseurs();
    this.loadArticles();
  }

  private loadClientsOrFournisseurs(): void {
    if (this.origin === 'client') {
      this.cltFrsService.findAllClient().subscribe(clients => {
        this.listClientsFournisseurs = clients;
      });
    } else if (this.origin === 'fournisseur') {
      this.cltFrsService.findAllFournisseur().subscribe(fournisseurs => {
        this.listClientsFournisseurs = fournisseurs;
      });
    }
  }

  private loadArticles(): void {
    this.articleService.findAllArticle().subscribe(articles => {
      this.listArticle = articles;
    });
  }
  findAllArticles(): void {
    this.articleService.findAllArticle() // <-- use the exact method name
      .subscribe(articles => {
        this.listArticle = articles;
      });
  }

  findArticleByCode(codeArticle: string): void {
    this.articleErrorMsg = '';

    if (!codeArticle) {
      this.articleErrorMsg = 'Veuillez entrer un code article';
      return;
    }

    this.articleService.findArticleByCode(codeArticle).subscribe({
      next: (article) => {
        this.searchedArticle = article;
        this.articleErrorMsg = '';
      },
      error: (err) => {
        this.articleErrorMsg = err.error?.errors || 'Article introuvable';
      }
    });
  }

  searchArticleEvent(): void {
    if (this.codeArticle.length === 0) {
      this.articleService.findAllArticle().subscribe(articles => {
        this.listArticle = articles;
      });
      return;
    }
    const search = this.codeArticle.toLowerCase();
    this.listArticle = this.listArticle.filter(art =>
      art.codeArticle?.toLowerCase().startsWith(search) ||
      art.designation?.toLowerCase().startsWith(search)
    );
  }
  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
      .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }


  ajouterLigneCommande(): void {
    if (!this.searchedArticle?.id || !this.quantite) {
      this.articleErrorMsg = 'Veuillez sélectionner un article et saisir la quantité';
      return;
    }

    const ligneCmdAlreadyExist = this.lignesCommande.find(
      lig => lig.article?.codeArticle === this.searchedArticle?.codeArticle
    );

    if (ligneCmdAlreadyExist) {
      // Update existing quantity
      ligneCmdAlreadyExist.quantite = (ligneCmdAlreadyExist.quantite || 0) + +this.quantite;
    } else {
      const ligne: LigneCommandeClientDto = {
        article: this.searchedArticle!,
        prixUnitaire: this.searchedArticle!.prixUnitaireTtc || 0,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligne);
    }
      this.totalCommande = 0;
    this.updateTotalCommande();
    this.resetArticleSelection();
  }

  private updateTotalCommande(): void {
    this.checkLigneCommande()
    this.calculerTotalCommande()
   /* this.totalCommande = this.lignesCommande.reduce((total, ligne) => {
      const prix = ligne.prixUnitaire || 0;
      const quantite = ligne.quantite || 0;
      return total + prix * quantite;
    }, 0);*/
  }

  private resetArticleSelection(): void {
    this.searchedArticle = null;
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.articleErrorMsg = '';
    this.findAllArticles()
  }
  calculerTotalCommande(): void {
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }


  private checkLigneCommande(): void {
    if (!this.searchedArticle) {
      this.articleErrorMsg = 'Veuillez sélectionner un article';
      return; // exit if no article is selected
    }

    const ligneCmdAlreadyExists = this.lignesCommande.find(
      lig => lig.article?.codeArticle === this.searchedArticle?.codeArticle
    );

    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle?.codeArticle) {
          lig.quantite = (lig.quantite || 0) + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
        article: this.searchedArticle,              // safe: guaranteed non-null
        prixUnitaire: this.searchedArticle.prixUnitaireTtc || 0, // fallback if undefined
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
  }




  cancelClick(): void {
    const route = this.origin === 'client' ? '/commandes-clients' : '/commandes-fournisseurs';
    this.router.navigate([route]);
  }

  saveClick(): void {
    // TODO: implement save logic later
    console.log('Commande à sauvegarder :', this.lignesCommande);
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle || '';
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande()
    if (!this.selectedClientFournisseur || this.lignesCommande.length === 0) {
      this.errorMsg = ['Veuillez sélectionner un client/fournisseur et ajouter au moins un article.'];
      return;
    }

    const commandeClient: CommandeClientDtoReq = {
      client: this.selectedClientFournisseur,
      code: 'CMD-' + new Date().getTime(),
      etatCommande: 'EN_PREPARATION',
      idEntreprise: 1,
      dateCommande: new Date().toISOString(),
      ligneCommandeClients: this.lignesCommande
    };

    this.commandeClientService.saveUsingPOST3(commandeClient).subscribe({
      next: (cmd) => {
        console.log('Commande saved:', cmd);
        this.router.navigate(['commandesclient']);
      },
      error: (err) => {
        console.error('Save error:', err);
        this.errorMsg = err?.error?.errors || ['Une erreur est survenue lors de l\'enregistrement.'];
      }
    });
  }

  private preparerCommande(): any {
    if (this.origin === 'client') {
      return  {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande
      };
    } else if (this.origin === 'fournisseur') {
      return  {
        fournisseur: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeFournisseurs: this.lignesCommande
      };
    }
  }


}

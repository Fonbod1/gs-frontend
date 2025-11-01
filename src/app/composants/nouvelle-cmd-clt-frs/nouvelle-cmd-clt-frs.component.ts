import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleDto } from '../../../gs-api/src/models/article-dto';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { FournisseurDto } from '../../../gs-api/src/models/fournisseur-dto';
import { LigneCommandeClientDto } from '../../../gs-api/src/models/ligne-commande-client-dto';
import { CommandeClientDtoReq } from '../../../gs-api/src/models/commande-client-dto-req';
import { CommandeFournisseurDtoRes } from '../../../gs-api/src/models/commande-fournisseur-dto-res';

import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { ArticleService } from '../../services/article/article.service';
import { CmdcltfrsService } from '../../services/cmdcltfrs/cmdcltfrs.service';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];

  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<any> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltFrsService: CltfrsService,
    private articleService: ArticleService,
    private cmdCltFrsService: CmdcltfrsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });

    this.findAllClientsFournisseurs();
    this.findAllArticles();

    // call correct service method and type the result
    this.articleService.findAllArticle()
      .subscribe((articles: ArticleDto[]) => {
        this.listArticle = articles;
      });
  }


  findAllClientsFournisseurs(): void {
    if (this.origin === 'client') {
      this.cltFrsService.findAllClients()
        .subscribe(clients => this.listClientsFournisseurs = clients);
    } else if (this.origin === 'fournisseur') {
      this.cltFrsService.findAllFournisseurs()
        .subscribe(fournisseurs => this.listClientsFournisseurs = fournisseurs);
    }
  }

  findAllArticles(): void {
    this.articleService.findAllArticle()
      .subscribe(articles => this.listArticle = articles);
  }

  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
      .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  ajouterLigneCommande(): void {
    const ligneCmdAlreadyExists = this.lignesCommande.find(
      lig => lig.article?.codeArticle === this.searchedArticle.codeArticle
    );

    if (ligneCmdAlreadyExists) {
      ligneCmdAlreadyExists.quantite += +this.quantite;
    } else {
      this.lignesCommande.push({
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      });
    }

    this.calculerTotalCommande();
    this.resetArticleSelection();
  }

  private resetArticleSelection(): void {
    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  calculerTotalCommande(): void {
    this.totalCommande = this.lignesCommande.reduce((total, ligne) => {
      return total + ((ligne.prixUnitaire || 0) * (ligne.quantite || 0));
    }, 0);
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle || '';
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();

    if (this.origin === 'client') {
      this.cmdCltFrsService.enregistrerCommandeClient(commande as CommandeClientDtoReq)
        .subscribe(
          () => this.router.navigate(['commandesclient']),
          error => this.errorMsg = error.error?.errors || ['Une erreur est survenue.']
        );
    } else if (this.origin === 'fournisseur') {
      this.cmdCltFrsService.enregistrerCommandeFournisseur(commande as CommandeFournisseurDtoRes)
        .subscribe(
          () => this.router.navigate(['commandesfournisseur']),
          error => this.errorMsg = error.error?.errors || ['Une erreur est survenue.']
        );
    }
  }

  private preparerCommande(): any {
    if (this.origin === 'client') {
      return {
        client: { id: this.selectedClientFournisseur.id },
        code: this.codeCommande || 'CMD-' + new Date().getTime(),
        dateCommande: new Date().toISOString(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande.map(l => ({
          article: { id: l.article.id },
          quantite: l.quantite,
          prixUnitaire: l.prixUnitaire
        }))
      };
    } else if (this.origin === 'fournisseur') {
      return {
        fournisseur: { id: this.selectedClientFournisseur.id },
        code: this.codeCommande || 'CMD-' + new Date().getTime(),
        dateCommande: new Date().toISOString(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeFournisseurs: this.lignesCommande.map(l => ({
          article: { id: l.article.id },
          quantite: l.quantite,
          prixUnitaire: l.prixUnitaire
        }))
      };
    }
  }

  cancelClick(): void {
    const route = this.origin === 'client' ? '/commandes-clients' : '/commandes-fournisseurs';
    this.router.navigate([route]);
  }

}

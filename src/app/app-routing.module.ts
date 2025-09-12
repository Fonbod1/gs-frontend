import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PageCategoriesComponent} from "./pages/categories/page-categories/page-categories.component";
import {NouvelleCategoryComponent} from "./pages/categories/nouvelle-category/nouvelle-category.component";

const routes: Routes = [
       { path: 'login', component: PageLoginComponent },
        { path: 'inscrire', component: PageInscriptionComponent },
         {
            path: '',
            component: PageDashboardComponent,
            children: [

                {
                   path:  'statistiques',
                   component: PageStatistiquesComponent
                  },

                {
                   path: 'articles',
                   component: PageArticleComponent
                  },
                 {
                   path: 'nouvelarticle',
                   component: NouvelArticleComponent
                  },
                {
                  path: 'mvtstk',
                  component: PageMvtstkComponent
                },
              {
                path: 'clients',
                component: PageClientComponent
               },
                {
                  path: 'nouveauclient',
                  component: NouveauCltFrsComponent
                 },
              {
                path: 'commandesclient',
                component: PageCmdCltFrsComponent
              },
              {
                path: 'nouvellecommandeclt',
                component: NouvelleCmdCltFrsComponent
              },
               {
                 path: 'fournisseurs',
                 component: PageFournisseurComponent
                },
              {
                path: 'nouveaufournisseur',
                component:  NouveauCltFrsComponent
                },
              {
                path: 'commandesfournisseur',
                component:  PageCmdCltFrsComponent
              },
              {
                path: 'nouvellecommandefrs',
                component: NouvelleCmdCltFrsComponent
              },
              {
                path: 'categories',
                component: PageCategoriesComponent
              },
              {
                path: 'nouvellecategorie',
                component: NouvelleCategoryComponent
              },
            ]
            }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

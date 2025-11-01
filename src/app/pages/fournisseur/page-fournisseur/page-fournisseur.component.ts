import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CltfrsService } from "../../../services/cltfrs/cltfrs.service";
import { FournisseurDto } from "../../../../gs-api/src/models/fournisseur-dto";
import { PhotoControllerService } from "../../../../gs-api/src/services/photo-controller.service";
import SavePhotoUsingPOSTParams = PhotoControllerService.SavePhotoUsingPOSTParams;

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: FournisseurDto[] = [];
  errorMsg: string = '';

  // Track selected file and preview for photo upload
  selectedFile: File | null = null;
  previewImg: string | ArrayBuffer = '';
  currentFournisseurId?: number;

  constructor(
    private router: Router,
    //private cltfrsService: CmdcltfrsService,
    private cltfrsService: CltfrsService,
    private photoService: PhotoControllerService
  ) {}

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.cltfrsService.findAllFournisseurs().subscribe({
      next: (fournisseurs) => this.listFournisseur = fournisseurs,
      error: () => this.errorMsg = 'Erreur lors du chargement des fournisseurs'
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handleSuppression(event: string): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }

  // Handle file selection for a specific fournisseur
  onFileInput(files: FileList | null, fournisseurId: number): void {
    if (files && files.length > 0) {
      this.selectedFile = files.item(0);
      this.currentFournisseurId = fournisseurId;

      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile!);
      reader.onload = () => {
        if (reader.result) {
          this.previewImg = reader.result;
        }
      };
    }
  }

  // Save photo for the selected fournisseur
  savePhoto(): void {
    if (this.selectedFile && this.currentFournisseurId) {
      const params: SavePhotoUsingPOSTParams = {
        id: this.currentFournisseurId,
        file: this.selectedFile,
        title: `Fournisseur_${this.currentFournisseurId}`,
        context: 'fournisseur'
      };

      this.photoService.savePhotoUsingPOST(params).subscribe({
        next: () => {
          this.findAllFournisseurs(); // Refresh list to show updated photo
          this.selectedFile = null;
          this.currentFournisseurId = undefined;
        },
        error: (err) => console.error('Error saving photo:', err)
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { UserService } from "../user/user.service";
import { CategoryControllerService } from "../../../gs-api/src/services/category-controller.service";
import { CategoryDto } from "../../../gs-api/src/models/category-dto";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private userService: UserService,
    private categoryService: CategoryControllerService
  ) {}

  enregistrerCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    categoryDto.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id;
    return this.categoryService.saveUsingPOST1(categoryDto);
  }

  findAll(): Observable<Array<CategoryDto>> {
    return this.categoryService.findAllUsingGET1();
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.categoryService.findByIdUsingGET1(idCategory);
  }

  delete(idCategory?: number): Observable<any> {
    if (idCategory) {
      return this.categoryService.deleteUsingDELETE1(idCategory);
    }
    return of();
  }
}

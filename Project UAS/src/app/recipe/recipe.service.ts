import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { SoppingListService } from '../sopping-list/sopping-list.service';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Prototype Robot Pemadam Api Berbasis Mikrokontroller Atmega 32','Prototype Robot Pemadam Api Berbasis Mikrokontroller Atmega 32. Oleh Mardiansyah, Program Study Teknik Elektronika, Jurusan Teknik Elektro, POLITEKNIK NEGERI PONTIANAK 2012'
    ,'https://image.slidesharecdn.com/1-halamanjudulpengesahanpernyataan-121010024734-phpapp02/95/1-halaman-judul-pengesahan-pernyataan-1-728.jpg?cb=1349837293',
    [
      new Ingredient('Proposal Laporan Akhir ',2011),
      new Ingredient('Fotokopi Proposal Laporan Akhir ',2011),
      new Ingredient('Alat Prototype Robot ',2011)
    ]),
    new Recipe('Daya Lentur Resilience Anak Asuh di Panti Sosial Asuhan Anak Yogyakarta Tahun 2011','Daya Lentur Resilience Anak Asuh di Panti Sosial Asuhan Anak Yogyakarta Tahun 2011. Oleh Hariyanto, Program Study Bimbingan Konseling. Psikologi Pendidikan dan Bimbingan, Fakultas Ilmu Pendidikan. Universitas Negeri Yogyakarta 2011','http://3.bp.blogspot.com/-B-jrIDCZkxg/UUTGNqq-4bI/AAAAAAAAALg/QlweCMeYUv0/s1600/Contoh+Proposal+Skripsi.jpg',
  [
      new Ingredient('Proposal Laporan Akhir ',2011),
      new Ingredient ('Fotokopi Proposal Laporan Akhir ', 2012),
  ]),];

  constructor(private slsService: SoppingListService){}
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
  
  // tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsToSoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

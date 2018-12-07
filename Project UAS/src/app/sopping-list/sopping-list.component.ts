import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { SoppingListService } from './sopping-list.service';


@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrls: ['./sopping-list.component.css']
})
export class SoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[]
  private subscription: Subscription;

  constructor(private slsService:SoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredients();
    this.subscription = this.slsService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

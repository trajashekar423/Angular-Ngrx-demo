import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { Grocery } from '../store/reducers/grocery.reducer';


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  Mygrocery$?:Observable<Grocery[]>
  constructor (private store:Store<{Mygrocery:Grocery[]}>){
    this.Mygrocery$ = store.select('Mygrocery')
  }
}

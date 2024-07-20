import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grocery } from './store/reducers/grocery.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataComponent } from "./data/data.component";
import { HeaderComponent } from "./header/header.component";
import { HerobannerComponent } from "./herobanner/herobanner.component";
import { MybannerComponent } from "./mybanner/mybanner.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DataComponent, HeaderComponent, HerobannerComponent, MybannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-angular';
  Mygrocery$?:Observable<Grocery[]>
  constructor (private store:Store<{Mygrocery:Grocery[]}>){
    this.Mygrocery$ = store.select('Mygrocery')
  }

}


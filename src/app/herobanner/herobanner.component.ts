import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Homepage } from '../store/reducers/home.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-herobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herobanner.component.html',
  styleUrl: './herobanner.component.css'
})
export class HerobannerComponent {
  title="Raja"
  Myherobanner$?:Observable<Homepage[]>
  constructor (private store:Store<{Myherobanner:Homepage[]}>){
    this.Myherobanner$ = store.select('Myherobanner')
  }
}



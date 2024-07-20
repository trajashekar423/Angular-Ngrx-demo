import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mybannercontent } from '../store/reducers/mybanner.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mybanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mybanner.component.html',
  styleUrl: './mybanner.component.css'
})
export class MybannerComponent {
  Mybanner$?:Observable<Mybannercontent[]>
  constructor (private store:Store<{Mybanner:Mybannercontent[]}>){
    this.Mybanner$ = store.select('Mybanner')
  }
}



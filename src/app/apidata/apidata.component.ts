import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidata.component.html',
  styleUrl: './apidata.component.css'
})
export class ApidataComponent implements OnInit {

  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (data: any) => {
        this.products = data.data; // Adjust this based on the actual structure of the response
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

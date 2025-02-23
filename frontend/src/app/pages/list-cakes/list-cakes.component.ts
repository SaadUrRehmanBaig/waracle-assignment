import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { ICakeListResponse } from '../../core/interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-list-cakes',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatProgressSpinner],
  templateUrl: './list-cakes.component.html',
  styleUrl: './list-cakes.component.scss'
})
export class ListCakesComponent {
  
  loading = true;
  displayedColumns: string[] = ['name', 'comment', 'imageUrl', 'yumFactor'];
  dataSource:ICakeListResponse['data'] = [ ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<ICakeListResponse>('http://localhost:5000/cakes').subscribe((response) => {
      this.loading = false;
      this.dataSource = response.data || [];
    });
  }
  
}

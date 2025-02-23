import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { ICakeListResponse } from '../../core/interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cakes',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatProgressSpinner, MatTooltip],
  templateUrl: './list-cakes.component.html',
  styleUrl: './list-cakes.component.scss'
})
export class ListCakesComponent {
  
  loading = true;
  displayedColumns: string[] = ['name', 'comment', 'imageUrl', 'yumFactor', 'actions'];
  dataSource:ICakeListResponse['data'] = [ ];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<ICakeListResponse>('http://localhost:5000/cakes').subscribe((response) => {
      this.loading = false;
      this.dataSource = response.data || [];
    });
  }

  tocCreateCake() {
    this.router.navigate(['/create-cakes']);
  }

  editCake(id: string) {
    this.router.navigate(['/edit-cakes',id]);
  }

  deleteCake(id: string) {
    this.http.delete(`http://localhost:5000/cakes/${id}`).subscribe(() => {
      this.dataSource = this.dataSource.filter((cake) => cake._id !== id);
    });
  }
  
}

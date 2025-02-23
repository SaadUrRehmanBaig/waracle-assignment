import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-cakes',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './list-cakes.component.html',
  styleUrl: './list-cakes.component.scss'
})
export class ListCakesComponent {
  displayedColumns: string[] = ['name', 'comment', 'imageUrl', 'yumFactor'];
  
  dataSource = [
    {
      id: '1',
      name: 'cake2',
      comment: 'some comment',
      imageUrl: 'https://m.media-amazon.com/images/I/71J+hdCUVEL._AC_SX679_.jpg',
      yumFactor: 1
    },
    {
      id: '2',
      name: 'cake3',
      comment: 'another comment',
      imageUrl: 'https://m.media-amazon.com/images/I/81cP2h6FdWL._AC_SX679_.jpg',
      yumFactor: 5
    }
  ];
}

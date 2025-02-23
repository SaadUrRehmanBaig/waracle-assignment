import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-cakes',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-cakes.component.html',
  styleUrl: './create-cakes.component.scss'
})
export class CreateCakesComponent {

  cakeForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
    this.cakeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.maxLength(200)]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg|gif))')]],
      yumFactor: [3, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  submitCake() {
    if (this.cakeForm.invalid) return;
    
    this.loading = true;
    this.http.post('http://localhost:5000/cakes', this.cakeForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Cake added successfully! 🎂', 'Close', { duration: 3000 });
        this.cakeForm.reset();
        this.router.navigate(['/list-cakes']);
      },
      error: (error) => {
        this.loading = false;
        this.snackBar.open(error.message, 'Close', { duration: 3000 });
      }
    });
  }
}

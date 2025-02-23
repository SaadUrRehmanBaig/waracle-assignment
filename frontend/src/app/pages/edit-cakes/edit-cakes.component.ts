import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-cakes',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './edit-cakes.component.html',
  styleUrl: './edit-cakes.component.scss'
})
export class EditCakesComponent {
  cakeForm: FormGroup;
  loading = false;
  cakeId: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.cakeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.maxLength(200)]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg|gif))')]],
      yumFactor: [3, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit() {
    this.cakeId = this.route.snapshot.paramMap.get('id') || '';
    if (this.cakeId) {
      this.loadCakeDetails();
    }
  }

  loadCakeDetails() {
    this.http.get(`http://localhost:5000/cakes/${this.cakeId}`).subscribe({
      next: (response: any) => {
        this.cakeForm.patchValue(response.data);
      },
      error: (error) => {
        this.snackBar.open(error.message, 'Close', { duration: 3000 });
        this.router.navigate(['/']);
      }
    });
  }

  updateCake() {
    if (this.cakeForm.invalid) return;

    this.loading = true;
    this.http.put(`http://localhost:5000/cakes/${this.cakeId}`, this.cakeForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Cake updated successfully! 🎂', 'Close', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to update cake. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }
}

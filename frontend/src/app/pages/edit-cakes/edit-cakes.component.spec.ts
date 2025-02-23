import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCakesComponent } from './edit-cakes.component';

describe('EditCakesComponent', () => {
  let component: EditCakesComponent;
  let fixture: ComponentFixture<EditCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

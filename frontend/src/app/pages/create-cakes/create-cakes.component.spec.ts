import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCakesComponent } from './create-cakes.component';

describe('CreateCakesComponent', () => {
  let component: CreateCakesComponent;
  let fixture: ComponentFixture<CreateCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

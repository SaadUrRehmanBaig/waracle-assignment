import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCakesComponent } from './list-cakes.component';

describe('ListCakesComponent', () => {
  let component: ListCakesComponent;
  let fixture: ComponentFixture<ListCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

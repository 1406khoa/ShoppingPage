import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListListComponent } from './product-list-list.component';


describe('ProductListListComponent', () => {
  let component: ProductListListComponent;
  let fixture: ComponentFixture<ProductListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

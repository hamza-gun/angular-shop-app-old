import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddForm2Component } from './product-add-form2.component';

describe('ProductAddForm2Component', () => {
  let component: ProductAddForm2Component;
  let fixture: ComponentFixture<ProductAddForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddForm2Component]
    });
    fixture = TestBed.createComponent(ProductAddForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

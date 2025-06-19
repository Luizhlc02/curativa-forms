import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoFormsComponent } from './boleto-forms.component';

describe('BoletoFormsComponent', () => {
  let component: BoletoFormsComponent;
  let fixture: ComponentFixture<BoletoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletoFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

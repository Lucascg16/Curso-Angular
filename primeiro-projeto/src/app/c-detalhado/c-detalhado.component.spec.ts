import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDetalhadoComponent } from './c-detalhado.component';

describe('CDetalhadoComponent', () => {
  let component: CDetalhadoComponent;
  let fixture: ComponentFixture<CDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDetalhadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

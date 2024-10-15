import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompomenteGeradoComponent } from './compomente-gerado.component';

describe('CompomenteGeradoComponent', () => {
  let component: CompomenteGeradoComponent;
  let fixture: ComponentFixture<CompomenteGeradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompomenteGeradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompomenteGeradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

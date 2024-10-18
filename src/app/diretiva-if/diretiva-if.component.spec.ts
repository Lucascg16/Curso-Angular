import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaIfComponent } from './diretiva-if.component';

describe('DiretivaIfComponent', () => {
  let component: DiretivaIfComponent;
  let fixture: ComponentFixture<DiretivaIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

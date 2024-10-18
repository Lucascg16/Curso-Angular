import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaSwitchComponent } from './diretiva-switch.component';

describe('DiretivaSwitchComponent', () => {
  let component: DiretivaSwitchComponent;
  let fixture: ComponentFixture<DiretivaSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

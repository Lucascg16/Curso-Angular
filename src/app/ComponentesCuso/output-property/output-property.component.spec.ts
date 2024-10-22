import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyComponent } from './output-property.component';

describe('OutputPropertyComponent', () => {
  let component: OutputPropertyComponent;
  let fixture: ComponentFixture<OutputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

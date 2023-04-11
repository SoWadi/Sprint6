import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesEscenaComponent } from './frases-escena.component';

describe('FrasesEscenaComponent', () => {
  let component: FrasesEscenaComponent;
  let fixture: ComponentFixture<FrasesEscenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrasesEscenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesEscenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

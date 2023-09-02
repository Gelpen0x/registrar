import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAccComponent } from './registrar-acc.component';

describe('RegistrarAccComponent', () => {
  let component: RegistrarAccComponent;
  let fixture: ComponentFixture<RegistrarAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAccComponent]
    });
    fixture = TestBed.createComponent(RegistrarAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

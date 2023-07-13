import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassComponent } from './mass.component';

describe('MassComponent', () => {
  let component: MassComponent;
  let fixture: ComponentFixture<MassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassComponent]
    });
    fixture = TestBed.createComponent(MassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

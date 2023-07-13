import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artist2Component } from './artist2.component';

describe('Artist2Component', () => {
  let component: Artist2Component;
  let fixture: ComponentFixture<Artist2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Artist2Component]
    });
    fixture = TestBed.createComponent(Artist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

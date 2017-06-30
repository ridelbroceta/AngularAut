import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloneComponent } from './alone.component';

describe('AloneComponent', () => {
  let component: AloneComponent;
  let fixture: ComponentFixture<AloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

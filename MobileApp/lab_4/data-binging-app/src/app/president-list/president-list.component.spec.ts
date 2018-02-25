import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentListComponent } from './president-list.component';

describe('PresidentListComponent', () => {
  let component: PresidentListComponent;
  let fixture: ComponentFixture<PresidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

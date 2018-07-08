import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleLaneHeaderComponent } from './little-lane-header.component';

describe('LittleLaneHeaderComponent', () => {
  let component: LittleLaneHeaderComponent;
  let fixture: ComponentFixture<LittleLaneHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleLaneHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleLaneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

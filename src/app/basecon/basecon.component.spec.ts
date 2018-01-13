import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconComponent } from './basecon.component';

describe('BaseconComponent', () => {
  let component: BaseconComponent;
  let fixture: ComponentFixture<BaseconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

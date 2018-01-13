import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormexmpComponent } from './formexmp.component';

describe('FormexmpComponent', () => {
  let component: FormexmpComponent;
  let fixture: ComponentFixture<FormexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

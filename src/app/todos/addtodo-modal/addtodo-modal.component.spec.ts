import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodoModalComponent } from './addtodo-modal.component';

describe('AddtodoModalComponent', () => {
  let component: AddtodoModalComponent;
  let fixture: ComponentFixture<AddtodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

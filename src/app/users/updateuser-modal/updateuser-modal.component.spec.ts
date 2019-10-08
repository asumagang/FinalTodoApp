import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserModalComponent } from './updateuser-modal.component';

describe('UpdateuserModalComponent', () => {
  let component: UpdateuserModalComponent;
  let fixture: ComponentFixture<UpdateuserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateuserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

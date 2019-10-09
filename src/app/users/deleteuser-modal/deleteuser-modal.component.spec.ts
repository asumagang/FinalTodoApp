import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserModalComponent } from './deleteuser-modal.component';

describe('DeleteuserModalComponent', () => {
  let component: DeleteuserModalComponent;
  let fixture: ComponentFixture<DeleteuserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteuserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetodoModalComponent } from './deletetodo-modal.component';

describe('DeletetodoModalComponent', () => {
  let component: DeletetodoModalComponent;
  let fixture: ComponentFixture<DeletetodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

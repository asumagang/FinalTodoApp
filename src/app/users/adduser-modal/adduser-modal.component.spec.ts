import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserModalComponent } from './adduser-modal.component';

describe('AdduserModalComponent', () => {
  let component: AdduserModalComponent;
  let fixture: ComponentFixture<AdduserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

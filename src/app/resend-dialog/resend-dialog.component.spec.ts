import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendDialogComponent } from './resend-dialog.component';

describe('ResendDialogComponent', () => {
  let component: ResendDialogComponent;
  let fixture: ComponentFixture<ResendDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

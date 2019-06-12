import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueueDataComponent } from './view-queue-data.component';

describe('ViewQueueDataComponent', () => {
  let component: ViewQueueDataComponent;
  let fixture: ComponentFixture<ViewQueueDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQueueDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueueDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

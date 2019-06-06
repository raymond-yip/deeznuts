import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlTransformComponent } from './xml-transform.component';

describe('XmlTransformComponent', () => {
  let component: XmlTransformComponent;
  let fixture: ComponentFixture<XmlTransformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlTransformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

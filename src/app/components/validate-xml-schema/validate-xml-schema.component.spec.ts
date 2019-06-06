import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateXmlSchemaComponent } from './validate-xml-schema.component';

describe('ValidateXmlSchemaComponent', () => {
  let component: ValidateXmlSchemaComponent;
  let fixture: ComponentFixture<ValidateXmlSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateXmlSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateXmlSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaInformationComponent } from './visa-information.component';

describe('VisaInformationComponent', () => {
  let component: VisaInformationComponent;
  let fixture: ComponentFixture<VisaInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaInformationComponent]
    });
    fixture = TestBed.createComponent(VisaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

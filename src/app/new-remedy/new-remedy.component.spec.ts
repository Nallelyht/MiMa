import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRemedyComponent } from './new-remedy.component';

describe('NewRemedyComponent', () => {
  let component: NewRemedyComponent;
  let fixture: ComponentFixture<NewRemedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRemedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRemedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

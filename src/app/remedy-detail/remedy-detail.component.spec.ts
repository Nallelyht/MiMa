import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedyDetailComponent } from './remedy-detail.component';

describe('RemedyDetailComponent', () => {
  let component: RemedyDetailComponent;
  let fixture: ComponentFixture<RemedyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

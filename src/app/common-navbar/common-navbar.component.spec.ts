import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNavbarComponent } from './common-navbar.component';

describe('CommonNavbarComponent', () => {
  let component: CommonNavbarComponent;
  let fixture: ComponentFixture<CommonNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

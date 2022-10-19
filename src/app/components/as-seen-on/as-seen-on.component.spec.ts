import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsSeenOnComponent } from './as-seen-on.component';

describe('AsSeenOnComponent', () => {
  let component: AsSeenOnComponent;
  let fixture: ComponentFixture<AsSeenOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsSeenOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsSeenOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

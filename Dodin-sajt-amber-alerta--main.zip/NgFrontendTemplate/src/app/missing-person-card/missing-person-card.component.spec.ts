import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonCardComponent } from './missing-person-card.component';

describe('MissingPersonCardComponent', () => {
  let component: MissingPersonCardComponent;
  let fixture: ComponentFixture<MissingPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingPersonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

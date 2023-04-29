import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperBackgroundComponent } from './paper-background.component';

describe('PaperBackgroundComponent', () => {
  let component: PaperBackgroundComponent;
  let fixture: ComponentFixture<PaperBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

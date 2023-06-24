import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTitlebarComponent } from './about-titlebar.component';

describe('AboutTitlebarComponent', () => {
  let component: AboutTitlebarComponent;
  let fixture: ComponentFixture<AboutTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTitlebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

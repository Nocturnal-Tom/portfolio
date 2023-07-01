import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTitlebarComponent } from './contact-titlebar.component';

describe('ContactTitlebarComponent', () => {
  let component: ContactTitlebarComponent;
  let fixture: ComponentFixture<ContactTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTitlebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

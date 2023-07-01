import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTitlebarComponent } from './blog-titlebar.component';

describe('BlogTitlebarComponent', () => {
  let component: BlogTitlebarComponent;
  let fixture: ComponentFixture<BlogTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTitlebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

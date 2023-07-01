import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTitlebarComponent } from './projects-titlebar.component';

describe('ProjectsTitlebarComponent', () => {
  let component: ProjectsTitlebarComponent;
  let fixture: ComponentFixture<ProjectsTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTitlebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

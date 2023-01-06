import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtablecomponentComponent } from './newtablecomponent.component';

describe('NewtablecomponentComponent', () => {
  let component: NewtablecomponentComponent;
  let fixture: ComponentFixture<NewtablecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtablecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtablecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

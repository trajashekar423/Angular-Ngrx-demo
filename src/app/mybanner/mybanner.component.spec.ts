import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybannerComponent } from './mybanner.component';

describe('MybannerComponent', () => {
  let component: MybannerComponent;
  let fixture: ComponentFixture<MybannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

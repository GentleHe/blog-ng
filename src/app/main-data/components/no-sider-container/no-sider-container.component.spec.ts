import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSiderContainerComponent } from './no-sider-container.component';

describe('NoSiderContainerComponent', () => {
  let component: NoSiderContainerComponent;
  let fixture: ComponentFixture<NoSiderContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoSiderContainerComponent]
    });
    fixture = TestBed.createComponent(NoSiderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

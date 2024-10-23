import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDynamicComponent } from './services-dynamic.component';

describe('ServicesDynamicComponent', () => {
  let component: ServicesDynamicComponent;
  let fixture: ComponentFixture<ServicesDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

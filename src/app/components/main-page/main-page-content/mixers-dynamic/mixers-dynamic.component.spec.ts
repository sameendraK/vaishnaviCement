import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixersDynamicComponent } from './mixers-dynamic.component';

describe('MixersDynamicComponent', () => {
  let component: MixersDynamicComponent;
  let fixture: ComponentFixture<MixersDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixersDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixersDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

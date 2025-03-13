import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KifComponentsComponent } from './kif-components.component';

describe('KifComponentsComponent', () => {
  let component: KifComponentsComponent;
  let fixture: ComponentFixture<KifComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KifComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KifComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

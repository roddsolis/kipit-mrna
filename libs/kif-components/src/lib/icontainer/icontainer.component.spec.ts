import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IcontainerComponent } from './icontainer.component';

describe('IcontainerComponent', () => {
  let component: IcontainerComponent;
  let fixture: ComponentFixture<IcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcontainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

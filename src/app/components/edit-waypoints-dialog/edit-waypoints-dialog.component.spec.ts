import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditWaypointsDialogComponent } from './edit-waypoints-dialog.component';


describe('EditWaypointsDialogComponent', () => {
  let component: EditWaypointsDialogComponent;
  let fixture: ComponentFixture<EditWaypointsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWaypointsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWaypointsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

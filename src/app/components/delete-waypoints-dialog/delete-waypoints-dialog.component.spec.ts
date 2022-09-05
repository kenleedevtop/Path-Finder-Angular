import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteWaypointsDialog } from './delete-waypoints-dialog.component';


describe('DeleteWaypointsDialog', () => {
  let component: DeleteWaypointsDialog;
  let fixture: ComponentFixture<DeleteWaypointsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWaypointsDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWaypointsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

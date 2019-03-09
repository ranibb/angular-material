import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  // We are distructuring the course parameters that we are reveving here ()
  editCourse({ description, longDescription, category }: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // prevents closing the dialog when clicking outside the dialog
    dialogConfig.data = {
      description, longDescription, category
    };
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }

}

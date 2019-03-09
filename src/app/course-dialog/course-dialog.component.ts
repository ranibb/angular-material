import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) { description, longDescription, category }: Course) {
    this.description = description;
  }

  ngOnInit() {
  }

  save() {

  }

  close() {

  }

}

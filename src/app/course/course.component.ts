import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { LessonsDatasource } from '../services/lessons.datasource';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course: Course;

  dataSource: LessonsDatasource;

  displayedColumns = ['seqNo', 'description', 'duration'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data.course;
    this.dataSource = new LessonsDatasource(this.coursesService);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith(null) // to trigger the call to load lessons
      )
      .subscribe(() => {
        this.dataSource.loadLessons(this.course.id, '', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
      });
  }

}

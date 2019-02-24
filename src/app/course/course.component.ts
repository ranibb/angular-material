import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { LessonsDatasource } from '../services/lessons.datasource';
import { startWith, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

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

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data.course;
    this.dataSource = new LessonsDatasource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0); // send us back to the first page
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
          this.dataSource.loadLessons(this.course.id, '', this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        })
      )
      .subscribe();
  }

}

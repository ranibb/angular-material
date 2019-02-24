import { AfterViewInit, Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { LessonsDatasource } from '../services/lessons.datasource';
import { startWith, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';

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

  @ViewChild('input')
  input: ElementRef;

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
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      )
      .subscribe();
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
          this.loadLessonsPage();
        })
      )
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadLessons(this.course.id, this.input.nativeElement.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

}

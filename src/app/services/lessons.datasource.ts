import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Lesson } from '../model/lesson';
import { CoursesService } from './courses.service';


export class LessonsDatasource implements DataSource<Lesson> {

  private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

  constructor(private courseService: CoursesService) {

  }

  loadLessons(
    courseId: number,
    filter: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number) {
      this.courseService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize)
        .pipe(
          catchError(() => of([]))
        )
        .subscribe(lessons => this.lessonsSubject.next(lessons));
  }

  connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
  }
}

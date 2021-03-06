import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseComponent } from './course/course.component';
import {
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule
} from '@angular/material';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseResolver } from './services/course.resolver';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule {
}

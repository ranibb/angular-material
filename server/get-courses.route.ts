import { Request, Response } from 'express';
import { COURSES } from './db-data';

export function getAllCourses(req: Request, res: Response) {
  res.status(200).json({ payload: Object.values(COURSES) });
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.params.id;
  const courses: any = Object.values(COURSES);
  // tslint:disable-next-line: triple-equals // tslint:disable-next-line: no-shadowed-variable
  const course = courses.find((course: { id: any; }) => course.id == courseId);
  res.status(200).json(course);
}

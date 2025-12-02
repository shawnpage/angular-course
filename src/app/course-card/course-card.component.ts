import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';
// import EventEmitter from 'node:events';

@Component({
  selector: 'course-card',
  // imports: [],
  templateUrl: './course-card.component.html',
  // styleUrl: ['./course-card.component.css'],
})



export class CourseCardComponent implements OnInit{

  @Input({
    required: true
  })
  course:Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor(  ) {}
  ngOnInit() {}

  onCourseViewed() {
    // console.log("Course viewed", this.course.description);
    console.log("card component - button clicked...")
    this.courseEmitter.emit(this.course);
  }
}

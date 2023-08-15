// Your code here
"use strict";

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }
  enroll(course) {
    this.courses.push(course);
    course.addStudent(this);
  }
  courseLoad() {
    const courseLoad = {};
    this.courses.forEach((course) => {
      if (courseLoad[course.department]) {
        courseLoad[course.department] += course.credits;
      } else {
        courseLoad[course.department] = course.credits;
      }
    });
    return courseLoad;
  }
  hasConflict(course) {
    this.courses.forEach((enrolledCourse) => {
      if (enrolledCourse.conflictsWith(course)) {
        return true;
      }
    });
    return false;
  }
}

class Course {
  constructor(name, department, credits, timeBlock) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.timeBlock = timeBlock;
    this.students = [];
  }
  addStudent(student) {
    this.students.push(student);
  }
  conflictsWith(course) {
    if (this.timeBlock !== course.timeBlock) {
      return false;
    }
    this.students.forEach((student) => {
      if (student.hasConflict(course)) {
        return true;
      }
    });
    return false;
  }
}

const student1 = new Student("John", "Doe");
const student2 = new Student("Jane", "Doe");
const course1 = new Course("Math", "Math", 4, 1);
const course2 = new Course("Science", "Science", 4, 1);
const course3 = new Course("English", "English", 4, 2);
const course4 = new Course("History", "History", 4, 2);
student1.enroll(course1);
student1.enroll(course3);
student2.enroll(course2);
student2.enroll(course4);
console.log(student1.courseLoad());
console.log(student2.courseLoad());

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://localhost/nlacregistrar/';

  constructor(private http: HttpClient) {}

  student() {
    return this.http.get(this.url + 'student.php');
  }
  teachers() {
    return this.http.get(this.url + 'teachers.php');
  }
  getfaculty(id: any) {
    return this.http.get(this.url + 'getteacherUpdate.php?id=' + id);
  }
  getfacultyReg() {
    return this.http.get(this.url + 'registrar.php');
  }
  updateTeacher(product: any) {
    return this.http.put(
      this.url + 'updateteacher.php',
      JSON.stringify(product)
    );
  }
  updateRegistrar(reg: any) {
    return this.http.put(this.url + 'updateregistrar.php', JSON.stringify(reg));
  }

  student1() {
    return this.http.get(this.url + 'monitorStud.php');
  }
  schedule() {
    return this.http.get(this.url + 'schedule.php');
  }
  // scheduleTeacher(faculty_id: any) {
  //   return this.http.get(this.url + `schedule.php?faculty_id=${faculty_id}`);
  // }
  scheduleTeacher(faculty_id: any, section_id: any) {
    return this.http.get(
      this.url +
        `schedule.php?faculty_id=${faculty_id}&section_id=${section_id}`
    );
  }

  subjectGrade(faculty_id: any, section_id: any, subject_id: any) {
    return this.http.get(
      this.url +
        `subjectGrade.php?faculty_id=${faculty_id}&section_id=${section_id}&subject_id=${subject_id}`
    );
  }

  enrollies() {
    return this.http.get(this.url + 'enrolSummary.php');
  }
  enrolled() {
    return this.http.get(this.url + 'enrolledList.php');
  }
  gradesStud() {
    return this.http.get(this.url + 'gradeList.php');
  }

  delStud(sid: any) {
    return this.http.delete(this.url + 'delStud.php?sid=' + sid);
  }

  getStudents() {
    return this.http.get(`${this.url}get_students.php`);
  }

  searchStudents(query: string) {
    return this.http.get(`${this.url}search_students.php?query=${query}`);
  }
  registrar() {
    return this.http.get(this.url + 'registrar.php');
  }
  Login(login: any) {
    return this.http.post(this.url + 'login.php', JSON.stringify(login));
  }
  getstud(id: any) {
    return this.http.get(this.url + 'getenrolledList.php?id=' + id);
  }
  updateStud(student: any) {
    return this.http.put(this.url + 'updatestud.php', JSON.stringify(student));
  }
  updatestud(LRN: any) {
    return this.http.put(this.url + 'approval.php', JSON.stringify(LRN));
  }
  createTeacher(createteacher: any) {
    return this.http.post(
      this.url + 'createteacher.php',
      JSON.stringify(createteacher)
    );
  }
}

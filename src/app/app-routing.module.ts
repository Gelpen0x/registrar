import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavSlideComponent } from './nav-slide/nav-slide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { GradeComponent } from './grade/grade.component';
import { SchedComponent } from './sched/sched.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentComponent } from './student/student.component';
import { MonitorstudComponent } from './monitorstud/monitorstud.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { UpdateStudComponent } from './update-stud/update-stud.component';
import { ApprovalComponent } from './approval/approval.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { RegistrarAccComponent } from './registrar-acc/registrar-acc.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherSchedComponent } from './teacher-sched/teacher-sched.component';
import { GradeRecordsComponent } from './grade-records/grade-records.component';
import { SubjectGradeComponent } from './subject-grade/subject-grade.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'side',
    component: SidebarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'approval', component: ApprovalComponent },
          { path: 'monitorstud', component: MonitorstudComponent },
        ],
      },
      {
        path: 'account',
        component: AccountComponent,
        children: [
          { path: 'updateTeacher', component: UpdateteacherComponent },
          { path: 'teacher', component: TeacherComponent },
        ],
      },
      { path: 'enrollment', component: EnrollmentComponent },
      {
        path: 'student',
        component: StudentComponent,
        children: [
          { path: 'studentList', component: StudentlistComponent },
          { path: 'updateStud', component: UpdateStudComponent },
        ],
      },
      { path: 'gradeList', component: GradeListComponent },
      { path: 'nav', component: NavSlideComponent },
      {
        path: 'grade',
        component: GradeComponent,
        children: [
          { path: 'gradeRecords', component: GradeRecordsComponent },
          { path: 'subjectGrade', component: SubjectGradeComponent },
          { path: 'teacherSched', component: TeacherSchedComponent },
        ],
      },
      { path: 'sched', component: SchedComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'registrarAccount', component: RegistrarAccComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

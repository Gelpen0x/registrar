import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavSlideComponent } from './nav-slide/nav-slide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { SchedComponent } from './sched/sched.component';
import { GradeComponent } from './grade/grade.component';
import { RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentComponent } from './student/student.component';
import { MonitorstudComponent } from './monitorstud/monitorstud.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { UpdateStudComponent } from './update-stud/update-stud.component';
import { ApprovalComponent } from './approval/approval.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { RegistrarAccComponent } from './registrar-acc/registrar-acc.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherSchedComponent } from './teacher-sched/teacher-sched.component';
import { GradeRecordsComponent } from './grade-records/grade-records.component';
import { SubjectGradeComponent } from './subject-grade/subject-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavSlideComponent,
    SidebarComponent,
    AccountComponent,
    SchedComponent,
    GradeComponent,
    EnrollmentComponent,
    StudentComponent,
    MonitorstudComponent,
    LoginComponent,
    TeacherComponent,
    GradeListComponent,
    UpdateStudComponent,
    ApprovalComponent,
    UpdateteacherComponent,
    UpdateTeacherComponent,
    RegistrarAccComponent,
    StudentlistComponent,
    TeacherSchedComponent,
    GradeRecordsComponent,
    SubjectGradeComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

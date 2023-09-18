import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
})
export class ApprovalComponent {
  enrollment: any;
  information: any;
  LRN: any;
  student: any;
  registrar: any;
  saveApproval: FormGroup;
  s: any;
  searchQuery: string = '';
  selectedGradeLevel: any;
  selectedStrand: string = '';
  originalStudentData: any;
  loadingData: boolean = false;
  uniqueGradeLevels: string[] = [];
  uniqueStrands: string[] = [];

  constructor(
    private fb: FormBuilder,
    private call: PostService,
    private route: Router
  ) {
    this.saveApproval = this.fb.group({
      approval: [''],
    });
  }
  ngOnInit(): void {
    this.call.student().subscribe((result: any) => {
      this.enrollment = result;
      this.student = result;
      const uniqueGradeLevelSet = new Set<string>();
      const uniqueStrandSet = new Set<string>();

      this.enrollment.forEach((e: any) => {
        uniqueGradeLevelSet.add(e.grade_level);
        if (e.strand) {
          uniqueStrandSet.add(e.strand);
        }
      });

      this.enrollment.forEach((e: any) => {
        if (e.strand) {
          this.uniqueStrands.push(e.strand);
        }
      });
      this.uniqueGradeLevels = Array.from(uniqueGradeLevelSet).sort();
      this.uniqueStrands = Array.from(uniqueStrandSet).sort();
      this.originalStudentData = result;
    });

    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  updatestud(LRN: any) {
    localStorage.setItem('id', LRN);
  }
  saveApprove(LRN: any) {
    this.call.updatestud({ LRN: LRN }).subscribe((result: any) => {
      this.student = this.student.filter((s: any) => s.LRN !== LRN);
      this.resetStudentData();
      this.searchStudents();
    });
  }

  searchStudents() {
    console.log('Search Query:', this.searchQuery);
    if (this.searchQuery.trim() !== '') {
      this.student = this.originalStudentData.filter((i: any) => {
        const fullName = `${i.fname} ${i.middle} ${i.lname}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      });
      console.log('Filtered Students:', this.student);
    } else {
      console.log('Resetting Student Data');
      this.loadingData = true;
      setTimeout(() => {
        this.student = this.originalStudentData;
        this.loadingData = false;
      }, 100);
    }
  }

  searchStudentsByGrade() {
    console.log('Selected Grade Level:', this.selectedGradeLevel);
    if (this.selectedGradeLevel.trim() !== '') {
      this.student = this.originalStudentData.filter(
        (i: any) => i.grade_level === this.selectedGradeLevel
      );
      console.log('Filtered Students:', this.student);
    } else {
      console.log('Resetting Student Data');
      this.loadingData = true;
      setTimeout(() => {
        this.student = this.originalStudentData;
        this.loadingData = false;
      }, 100);
    }
  }

  searchStudentsByStrand() {
    console.log('Selected Strand:', this.selectedStrand);
    if (this.selectedStrand.trim() !== '') {
      this.student = this.originalStudentData.filter(
        (i: any) => i.strand === this.selectedStrand
      );
      console.log('Filtered Students:', this.student);
    } else {
      console.log('Resetting Student Data');
      this.loadingData = true;
      setTimeout(() => {
        this.student = this.originalStudentData;
        this.loadingData = false;
      }, 100);
    }
  }

  onSearchQueryChange() {
    if (this.searchQuery.trim() === '') {
      console.log('Resetting Student Data');
      this.loadingData = true;
      setTimeout(() => {
        this.student = this.originalStudentData;
        this.loadingData = false;
      }, 100);
    }
  }
  resetStudentData() {
    this.student = this.originalStudentData;
  }

  resetDropdown() {
    this.selectedGradeLevel = '';
    this.searchStudentsByGrade();
    this.selectedStrand = '';
    this.searchStudentsByStrand();
    this.resetStudentData();
  }
}

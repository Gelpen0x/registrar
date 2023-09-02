import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent implements OnInit {
  enrollment: any;
  registrar: any;
  selectedGrade: string = ''; // To store the selected grade level
  searchQuery: string = ''; // To store the search query
  filteredEnrollment: any;
  overallTotal: number = 0;

  constructor(private call: PostService, private route: Router) {}
  ngOnInit(): void {
    this.call.enrollies().subscribe((result: any) => {
      this.enrollment = result;
      this.calculateOverallTotal();
    });
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });
  }
  onPrintButtonClick() {
    window.print();
  }
  filterEnrollment() {
    if (this.selectedGrade === '') {
      return this.enrollment; // Return all data if no grade is selected
    } else {
      return this.enrollment.filter(
        (e: any) => e.grade_level === this.selectedGrade
      );
    }
  }
  calculateOverallTotal() {
    // Use reduce to sum up the total_count from each enrollment record
    this.overallTotal = this.enrollment.reduce(
      (total: any, e: any) => total + e.total_count,
      0
    );
  }

  search() {
    const lowercaseQuery = this.searchQuery.toLowerCase();

    if (!this.searchQuery) {
      // If the search query is empty, reset the filtered data to show all records.
      this.filteredEnrollment = this.enrollment;
    } else {
      // If there is a search query, filter the enrollment data based on grade_level.
      this.filteredEnrollment = this.enrollment.filter((e: any) =>
        e.grade_level.toLowerCase().includes(lowercaseQuery)
      );
    }
  }
}

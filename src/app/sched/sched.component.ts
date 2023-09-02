import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.css'],
})
export class SchedComponent implements OnInit {
  registrar: any;
  schedule: any;
  daysInSchedule: any;
  timeSlots: any;
  totalDays: number; // Add this property for the total number of days

  constructor(private call: PostService) {
    this.totalDays = 0; // Initialize totalDays
  }

  ngOnInit(): void {
    this.call.registrar().subscribe((result: any) => {
      this.registrar = result;
    });

    this.call.schedule().subscribe((result: any) => {
      this.schedule = result;
      this.call.schedule().subscribe((daysResult: any) => {
        this.daysInSchedule = daysResult;

        this.call.schedule().subscribe((timeSlotsResult: any) => {
          this.timeSlots = timeSlotsResult;

          this.timeSlots.sort((a: any, b: any) => {
            return (
              this.convertTimeToMinutes(a.time) -
              this.convertTimeToMinutes(b.time)
            );
          });
        });
      });
    });
  }

  getScheduleForSlot(timeSlot: any, day: any): any[] {
    const uniqueSchedules: any[] = [];
    const uniqueMap = new Map();

    this.schedule.forEach((s: any) => {
      if (s.time === timeSlot.time && s.day === day.day) {
        const key = s.time + s.day;
        if (!uniqueMap.has(key)) {
          uniqueMap.set(key, true);
          uniqueSchedules.push(s);
        } else {
          console.log('Duplicate found:', s);
        }
      }
    });

    return uniqueSchedules;
  }

  convertTimeToMinutes(time: string): number {
    const [timePart, period] = time.split(' ');
    const [hours, minutes] = timePart.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    if (period === 'PM') {
      return totalMinutes + 12 * 60;
    }
    return totalMinutes;
  }

  onPrintButtonClick() {
    window.print();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-slide',
  templateUrl: './nav-slide.component.html',
  styleUrls: ['./nav-slide.component.css']
})
export class NavSlideComponent {
  formattedTime: string = '';

  constructor() { }

  ngOnInit(): void {
      this.update12HourTime();
      setInterval(() => {
          this.update12HourTime();
      }, 1000);
}
update12HourTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours || 12; // Make 0 to 12

  this.formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}
}
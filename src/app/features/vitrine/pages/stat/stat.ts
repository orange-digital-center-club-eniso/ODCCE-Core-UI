import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './stat.css',
  templateUrl: './stat.html',
})
export class StatComponent {
  stats: Stat[] = [
    { value: '120+', label: 'ACTIVE MEMBERS' },
    { value: '25+', label: 'COMPLETED PROJECTS' },
    { value: '20+', label: 'ANNUAL TRAININGS' },
  ];
}

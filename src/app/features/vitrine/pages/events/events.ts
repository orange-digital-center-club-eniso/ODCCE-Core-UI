import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EventItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: {
    month: string;
    day: string;
  };
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  isComingSoon?: boolean;
}
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule], // Nécessaire pour utiliser les directives Angular comme *ngFor ou [ngClass]
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class EventsComponent {
  events: EventItem[] = [
    {
      id: 'midnight-ai',
      title: 'Midnight AI',
      category: 'HACKATHON',
      location: 'ENISo',
      date: {
        month: 'NOV',
        day: '14',
      },
      description:
        'A 12-hour artificial intelligence hackathon where teams analyze real-world datasets and build innovative AI models in an overnight challenge.',
      image: 'events/midnight.jpg',
      buttonText: 'Discover Event →',
      buttonLink: '#',
    },
    {
      id: 'iot-challenge',
      title: 'ENISo IOT CHALLENGE',
      category: 'HACKATHON',
      location: 'ENISo',
      date: {
        month: 'MAR',
        day: '29',
      },
      description:
        'Intensive 48-hour flagship IoT hackathon challenging students to build connected hardware prototypes and smart embedded systems for real-world impact.',
      image: 'events/iot-challenge.jpeg',
      buttonText: 'Discover Event →',
      buttonLink: '#https://www.iot-challenge.tn/',
    },
    {
      id: 'cad-arena',
      title: 'CAD ARENA',
      category: 'TOURNAMENT',
      location: 'ENISo',
      date: {
        month: 'APR',
        day: '18',
      },
      description:
        'An engineering dual where teams compete head-to-head under identical technical specifications. Models are evaluated on precision, mechanical constraints, and mass verification using SolidWorks tools.',
      image: 'events/cad.jpeg',
      buttonText: 'Coming Soon',
      buttonLink: '#',
      isComingSoon: true,
    },
  ];
}

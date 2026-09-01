import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.css'],
})
export class TeamComponent implements AfterViewInit, OnDestroy {
  @ViewChild('marqueeWrapper') marqueeWrapper!: ElementRef;

  paused = false;
  isVisible = false;
  private observer!: IntersectionObserver;

  members: TeamMember[] = [
    {
      name: 'Sarra Mansour',
      role: 'Coordinator',
      image: 'team/sarracord.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Salma Ghrib',
      role: 'Head of Mechatronics',
      image: 'team/salma.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Rabeb Laaribi',
      role: 'Head of Mobile Dev',
      image: 'team/rabeb4.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Mohamed Salah',
      role: 'Head of Web Dev',
      image: 'team/salah.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Nessma Ayadi',
      role: 'Head of IOT',
      image: 'team/nessma.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Sarra Ghachem',
      role: 'Head of Automotive',
      image: 'team/sarraauto.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Mohamed Ali Cherif',
      role: 'Head of Problem Solving',
      image: 'team/dali.jpg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Hani Taghouti',
      role: 'Media Manager',
      image: 'team/hani.jpeg',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Mayssa Farik',
      role: 'Community Manager',
      image: 'team/mayssa.jpeg',
      linkedin: '#',
      github: '#',
    },
  ];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true; // Déclenche l'animation
            this.observer.disconnect(); // On arrête d'observer une fois lancé
          }
        });
      },
      { threshold: 0.1 },
    ); // Se déclenche dès que 10% de la section est visible

    if (this.marqueeWrapper) {
      this.observer.observe(this.marqueeWrapper.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

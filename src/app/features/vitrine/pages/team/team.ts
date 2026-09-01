import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
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
export class TeamComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  private autoPlayInterval: any;

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

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      if (this.scrollContainer) {
        const el = this.scrollContainer.nativeElement;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 324, behavior: 'smooth' });
        }
      }
    }, 3500);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -324, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 324, behavior: 'smooth' });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Division {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

@Component({
  selector: 'app-divisions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divisions.html',
  styleUrl: './divisions.css',
})
export class DivisionsComponent {
  divisions: Division[] = [
    {
      id: 'iot',
      name: 'IoT',
      title: 'IoT Division',
      description:
        'Focused on embedded systems, sensor integration, microcontrollers, and real-time connectivity to build smart, real-world IoT solutions.',
      image: '/divisions/iot1.jpg',
      iconName: 'iot.png',
    },
    {
      id: 'mechatronics',
      name: 'Mechatronics',
      title: 'Mechatronics Division',
      description:
        'Combining mechanical engineering, electronics, and programming to design intelligent robotics and automated systems.',
      image: '/divisions/mechatronics1.jpg',
      iconName: 'mechatronics.png',
    },
    {
      id: 'mobile',
      name: 'Mobile',
      title: 'Mobile Division',
      description:
        'Building cross-platform mobile applications with modern frameworks , emphasizing responsive dark UI and cloud backend integration.',
      image: '/divisions/mobile4.jpg',
      iconName: 'mobile.png',
    },
    {
      id: 'web',
      name: 'Web',
      title: 'Web Division',
      description: 'Developing high-performance, modern, and responsive web applications .',
      image: '/divisions/web2.jpg',
      iconName: 'web.png',
    },
    {
      id: 'automotive',
      name: 'Automotive',
      title: 'Automotive Division',
      description:
        'Piloting automotive projects and embedded systems activities, supervising technical designs, and ensuring seamless integration between hardware components and software logic.',
      image: '/divisions/automotive1.jpg',
      iconName: 'automotive.png',
    },
    {
      id: 'problemsolving',
      name: 'Problem solving',
      title: 'Problem Solving Division',
      description:
        'Piloting technical challenges, algorithmic problem-solving workshops, and competitive programming initiatives like OCES while driving innovation through creative engineering.',
      image: '/divisions/problem-sol.jpeg',
      iconName: 'problemsolving.png',
    },
  ];

  activeIndex = 0;
  currentRotation = 0;
  private isTransitioning = false; // Verrou pour éviter l'affolement du survol

  setActive(index: number) {
    const normalizedActive = this.activeIndex % this.divisions.length;

    // Si on est déjà sur cette carte ou pendant qu'elle tourne, on ignore
    if (normalizedActive === index || this.isTransitioning) return;

    this.isTransitioning = true;
    const total = this.divisions.length;
    const angleStep = 360 / total;

    let diff = index - normalizedActive;
    if (diff <= 0) {
      diff += total;
    }

    this.activeIndex = index;
    this.currentRotation -= diff * angleStep;

    // Libère le verrou une fois que l'animation CSS est terminée (correspond à duration-500)
    setTimeout(() => {
      this.isTransitioning = false;
    }, 550);
  }

  getContainerTransform(): string {
    return `rotateY(${this.currentRotation}deg)`;
  }

  getCardStyle(index: number) {
    const angleStep = 360 / this.divisions.length;
    const angle = index * angleStep;
    const radius = 340;

    return {
      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
    };
  }
}

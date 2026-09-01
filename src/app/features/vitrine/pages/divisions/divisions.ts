import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//définition de la structure (le contrat) d'une division technique
interface Division {
  id: string;
  name: string; //nom affichée sur le bouton
  title: string; //titre complet affichée dans la carte3
  description: string; //Texte descriptif détaillé de la division
  image: string; //Chemin vers l'image illustrative
  iconName: string;
}

@Component({
  selector: 'app-divisions',
  standalone: true,
  imports: [CommonModule], // Nécessaire pour utiliser les directives Angular comme *ngFor ou [ngClass]
  templateUrl: './divisions.html',
  styleUrl: './divisions.css',
})
export class DivisionsComponent {
  Math = Math;

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

  // On duplique le tableau pour créer l'effet de boucle infinie
  displayDivisions = [...this.divisions, ...this.divisions, ...this.divisions];

  activeDivision: Division = this.divisions[0];

  selectDivision(div: Division) {
    this.activeDivision = div;
  }

  getActiveIndex(): number {
    // On cherche l'index dans le bloc du milieu pour que le carrousel ait toujours de la marge de chaque côté
    const baseIndex = this.divisions.findIndex((d) => d.id === this.activeDivision.id);
    return baseIndex + this.divisions.length;
  }
  getTranslateX(): string {
    const activeIndex = this.getActiveIndex();
    const gap = 20; // gap-5 en px
    let offset = 0;

    for (let i = 0; i < activeIndex; i++) {
      const isActive = this.displayDivisions[i].id === this.activeDivision.id;
      offset += (isActive ? 340 : 200) + gap;
    }

    // + la moitié de la carte active pour la centrer précisément
    offset += 170; // 340 / 2

    return `calc(50% - ${offset}px)`;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CommunityImage {
  id: string;
  url: string;
  alt: string;
  colSpan?: string; // Pour gérer la disposition asymétrique (style Bento)
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community.html',
  styleUrls: ['./community.css'],
})
export class CommunityComponent {
  sectionTitle = 'COMMUNITY & LIFE';
  mainHeading = 'Life Inside ODCCE';
  description =
    'Beyond technical projects: team outings, bonding retreats, tech summits, and community celebrations.';

  communityImages: CommunityImage[] = [
    {
      id: '1',
      url: 'community/img8.png',
      alt: 'Team Group Photo in Amphitheater',
      colSpan: 'md:col-span-2', // Prend 2 colonnes sur desktop
    },
    {
      id: '2',
      url: 'community/img7.png',
      alt: 'Team Certificates Session',
      colSpan: 'md:col-span-1',
    },
    {
      id: '3',
      url: 'community/img3.png',
      alt: 'ODCCE Stand',
      colSpan: 'md:col-span-1',
    },
    {
      id: '4',
      url: 'community/img4.png',
      alt: 'Workshop Session',
      colSpan: 'md:col-span-1',
    },
    {
      id: '5',
      url: 'community/img5.png',
      alt: 'Project Exhibition',
      colSpan: 'md:col-span-1',
    },
  ];
}

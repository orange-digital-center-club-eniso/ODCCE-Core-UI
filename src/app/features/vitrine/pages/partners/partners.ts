import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css'],
})
export class PartnersComponent {
  partnersList = [
    { name: 'ODC', logo: 'partners/ODC1.png' },
    { name: 'ENISO', logo: 'partners/logoEniso2.png' },
    { name: 'DMA', logo: 'partners/DMA2.png' },
    { name: '4C ENISo', logo: 'partners/4c2.png' },
    { name: 'IoT Challenge', logo: 'partners/iot-challenge2.png' },
    { name: 'EI', logo: 'partners/ei2.png' },
    { name: 'ii', logo: 'partners/ii2.png' },
  ];
}

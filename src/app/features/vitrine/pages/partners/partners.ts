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
    { name: 'ENISO', logo: 'partners/logoEniso2.png' },
    { name: 'university', logo: 'partners/universite-sousse.png' },
    { name: 'ODC', logo: 'partners/ODC1.png' },
    { name: 'ii', logo: 'partners/ii2.png' },
    { name: 'DMA', logo: 'partners/DMA2.png' },
    { name: '4C ENISo', logo: 'partners/4c-v.png' },
    { name: 'IoT Challenge', logo: 'partners/iot-challenge2.png' },
    { name: 'EI', logo: 'partners/ei2.png' },
    { name: 'ii', logo: 'partners/ii2.png' },
    { name: 'noccs', logo: 'partners/noccs.png' },
    { name: 'fablab', logo: 'partners/fablab.png' },
  ];
}

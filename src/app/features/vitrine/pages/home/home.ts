import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  // Liste de tes images de fond (place tes images dans le dossier public)
  slides: string[] = [
    'bg1.jpg', // Remplace par tes propres images de slider
    'bg2.jpg',
    'bg3.jpg',
    'bg5.jpg',
    'bg6.jpg',
    'bg7.jpg',
  ];

  currentIndex: number = 0;
  private intervalId: any;
  // Injection du détecteur de changements
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    // Change d'image automatiquement toutes les 4 secondes (4000ms)
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      // Force Angular à actualiser la vue immédiatement
      this.cdr.detectChanges();
    }, 4000);
  }

  ngOnDestroy(): void {
    // Nettoie l'intervalle quand on quitte la page pour éviter les fuites de mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

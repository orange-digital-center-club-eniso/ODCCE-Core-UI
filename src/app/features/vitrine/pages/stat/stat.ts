import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './stat.css',
  templateUrl: './stat.html',
})
export class StatComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  membersCount = 0;
  projectsCount = 0;
  trainingsCount = 0;

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se déclenche uniquement quand la section entre dans la vue de l'écran
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.startCounter();
          }
        });
      },
      { threshold: 0.4 },
    ); // 40% de la section doit être visible

    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  startCounter() {
    const duration = 2000; // Durée de l'animation en ms (2 secondes)
    const steps = 60; // Nombre d'étapes fluides
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      this.membersCount = Math.floor(progress * 120);
      this.projectsCount = Math.floor(progress * 25);
      this.trainingsCount = Math.floor(progress * 20);

      this.cdr.detectChanges(); // Force le rendu visuel dans Angular

      if (currentStep >= steps) {
        this.membersCount = 120;
        this.projectsCount = 25;
        this.trainingsCount = 20;
        this.cdr.detectChanges();
        clearInterval(timer);
      }
    }, interval);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { HomeComponent } from './features/vitrine/pages/home/home';
import {AboutComponent}  from './features/vitrine/pages/about/about';
import { PillarsComponent } from './features/vitrine/pages/pillars/pillars';
import { DivisionsComponent } from './features/vitrine/pages/divisions/divisions';
import { ProjectsComponent } from './features/vitrine/pages/projects/projects';
import { EventsComponent } from './features/vitrine/pages/events/events'
import { CommunityComponent } from './features/vitrine/pages/community/community';
import { StatComponent } from './features/vitrine/pages/stat/stat';
import { TeamComponent } from './features/vitrine/pages/team/team';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, HomeComponent, AboutComponent, PillarsComponent,DivisionsComponent, ProjectsComponent, EventsComponent, CommunityComponent, StatComponent, TeamComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'ODCCE-Core-UI';
}

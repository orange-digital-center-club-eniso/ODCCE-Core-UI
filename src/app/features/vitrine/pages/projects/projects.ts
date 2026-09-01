import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  image: string;
  title: string;
  imagePosition?: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  // TODO: remplacez la 4e entrée par vos vraies infos (titre/description/tags du projet coupé sur la capture)
  projects: Project[] = [
    {
      image: '/projects/ai-firefighter.jpeg',
      title: 'AI-Assisted Fire Fighter',
      imagePosition: 'center',
      description:
        'Autonomous firefighting robot equipped with computer vision for real-time flame detection, thermal mapping, and smart navigation.',
      tags: ['IoT', 'ESP32', 'OpenCV', 'MQTT'],
    },
    {
      image: '/projects/agrisan.jpeg',
      title: 'AgriSan',
      imagePosition: 'center',
      description:
        'AI-powered mobile application designed for instant crop disease detection. Scans plant leaves via computer vision to identify anomalies, diagnose health issues, and provide actionable treatment recommendations for farmers.',
      tags: ['Flutter', 'Computer Vision', 'Django', 'MongoDB'],
    },
    {
      image: '/projects/smart-irrigation.jpeg',
      title: 'Smart Irrigation System',
      imagePosition: '30% 55%',
      description:
        'Automated soil moisture monitoring and smart watering system powered by Arduino and IoT sensors. Designed to optimize agricultural water consumption through real-time ambient data analysis and automated pump control.',
      tags: ['Arduino', 'Soil Moisture Sensors', 'Embedded C'],
    },
    {
      image: '/projects/ai-assisted-medical-band.jpeg',
      title: 'AI-Assisted Medical Band',
      imagePosition: '30% 30%',
      description:
        'Intelligent preventive medical monitoring system. Combines wearable IoT sensors with a mobile application to connect doctors and patients for real-time health tracking.',
      tags: ['IOT', 'ESP32', 'mobile APP', 'sensors'],
    },
    {
      image: '/projects/human-follower-robot.jpeg',
      imagePosition: 'center',
      title: 'Human Follower Robot',
      description:
        'Autonomous robot that detects and follows a person in real-time using ultrasonic distance sensing and adaptive motor control.',
      tags: ['Arduino Uno', 'HC-SR04', 'DC Motors', 'Embedded C'],
    },
    {
      image: '/projects/solar-tracker.jpeg',
      imagePosition: 'center',
      title: 'Solar Tracker',
      description:
        'Automated solar panel positioning system that adjusts panel orientation in real-time using a servo motor to maximize sunlight exposure and energy efficiency.',
      tags: ['Servo Motor', 'Solar Panel', 'Embedded C'],
    },
  ];

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -360, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 360, behavior: 'smooth' });
  }
}

import { Component } from '@angular/core';
import { HomeTemplateComponent } from '@shared/templates/home-template/home-template.component';
import { EventCard } from '@shared/molecules/event-card/event-card.model';

@Component({ selector: 'ef-home-page', standalone: true, imports: [HomeTemplateComponent], template: '<ef-home-template [events]="events" />' })
export class HomePageComponent {
  readonly events: EventCard[] = [
    { id: 'summit', title: 'Tech Summit LATAM', date: '15 agosto 2026', location: 'Bogotá', category: 'Tecnología', summary: 'Charlas y networking para equipos que construyen productos digitales.' },
    { id: 'design', title: 'Design Ops Night', date: '28 agosto 2026', location: 'Remoto', category: 'Diseño', summary: 'Prácticas para escalar sistemas visuales y flujos de colaboración.' },
    { id: 'music', title: 'Indie Flow Fest', date: '12 septiembre 2026', location: 'Medellín', category: 'Música', summary: 'Curaduría musical, experiencias inmersivas y gestión de asistentes.' }
  ];
}

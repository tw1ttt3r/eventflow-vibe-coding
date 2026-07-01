import { Component, input } from '@angular/core';
import { BadgeComponent } from '@shared/atoms/badge/badge.component';
import { EventCard } from './event-card.model';

@Component({
  selector: 'ef-event-card',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <article class="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
      <ef-badge [label]="event().category" />
      <h3 class="mt-4 text-xl font-bold text-white">{{ event().title }}</h3>
      <p class="mt-2 text-sm text-slate-300">{{ event().summary }}</p>
      <dl class="mt-6 grid gap-2 text-sm text-slate-300">
        <div><dt class="font-semibold text-white">Fecha</dt><dd>{{ event().date }}</dd></div>
        <div><dt class="font-semibold text-white">Lugar</dt><dd>{{ event().location }}</dd></div>
      </dl>
    </article>`
})
export class EventCardComponent { readonly event = input.required<EventCard>(); }

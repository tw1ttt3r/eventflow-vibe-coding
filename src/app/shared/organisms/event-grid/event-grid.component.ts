import { Component, input } from '@angular/core';
import { EventCardComponent } from '@shared/molecules/event-card/event-card.component';
import { EventCard } from '@shared/molecules/event-card/event-card.model';

@Component({ selector: 'ef-event-grid', standalone: true, imports: [EventCardComponent], template: `<section class="grid gap-5 md:grid-cols-3">@for (event of events(); track event.id) {<ef-event-card [event]="event" />} @empty {<p class="text-slate-300">No hay eventos disponibles.</p>}</section>` })
export class EventGridComponent { readonly events = input<EventCard[]>([]); }

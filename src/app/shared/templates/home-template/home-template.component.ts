import { Component, input } from '@angular/core';
import { ButtonComponent } from '@shared/atoms/button/button.component';
import { EventGridComponent } from '@shared/organisms/event-grid/event-grid.component';
import { EventCard } from '@shared/molecules/event-card/event-card.model';

@Component({
  selector: 'ef-home-template',
  standalone: true,
  imports: [ButtonComponent, EventGridComponent],
  template: `
    <main class="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-12">
      <section class="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/30 to-slate-900 p-8 md:p-12">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">EventFlow</p>
        <h1 class="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Organiza experiencias memorables con Angular, Appwrite y Vercel.</h1>
        <p class="mt-5 max-w-2xl text-lg text-slate-200">Una base escalable con atomic design, rutas standalone, Tailwind CSS y configuración lista para conectar colecciones de eventos en Appwrite.</p>
        <div class="mt-8"><ef-button>Explorar eventos</ef-button></div>
      </section>
      <section>
        <h2 class="mb-5 text-2xl font-bold">Eventos destacados</h2>
        <ef-event-grid [events]="events()" />
      </section>
    </main>`
})
export class HomeTemplateComponent { readonly events = input<EventCard[]>([]); }

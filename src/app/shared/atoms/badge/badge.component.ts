import { Component, input } from '@angular/core';

@Component({ selector: 'ef-badge', standalone: true, template: `<span class="rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100">{{ label() }}</span>` })
export class BadgeComponent { readonly label = input.required<string>(); }

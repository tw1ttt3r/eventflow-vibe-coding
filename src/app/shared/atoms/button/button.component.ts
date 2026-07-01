import { Component, input } from '@angular/core';

@Component({
  selector: 'ef-button',
  standalone: true,
  template: `<button [type]="type()" class="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-brand-700"><ng-content /></button>`
})
export class ButtonComponent {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
}

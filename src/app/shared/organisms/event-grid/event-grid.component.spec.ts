import { render, screen } from '@testing-library/angular';
import { EventGridComponent } from './event-grid.component';

it('shows an empty state when there are no events', async () => {
  await render(EventGridComponent);
  expect(screen.getByText('No hay eventos disponibles.')).toBeTruthy();
});

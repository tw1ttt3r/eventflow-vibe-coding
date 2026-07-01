import { render, screen } from '@testing-library/angular';
import { EventCardComponent } from './event-card.component';

it('renders event details', async () => {
  await render(EventCardComponent, { inputs: { event: { id: '1', title: 'Angular Conf', date: '1 julio 2026', location: 'Online', category: 'Tech', summary: 'Comunidad Angular.' } } });
  expect(screen.getByText('Angular Conf')).toBeTruthy();
  expect(screen.getByText('Online')).toBeTruthy();
});

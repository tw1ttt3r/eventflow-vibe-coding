import { HomePageComponent } from './home-page.component';

it('defines featured events for the landing page', () => {
  const component = new HomePageComponent();
  expect(component.events.length).toBeGreaterThanOrEqual(3);
  expect(component.events[0]?.title).toContain('Tech');
});

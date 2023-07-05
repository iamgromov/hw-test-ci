import healthLevel from '../healthLevel';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 51, 'healthy'],
  ['Маг', 50, 'wounded'],
  ['Маг', 10, 'critical'],
])('testing healthLevel function with name %s, %i health', (name, health, expected) => {
  const result = healthLevel({ name, health });
  expect(result).toBe(expected);
});

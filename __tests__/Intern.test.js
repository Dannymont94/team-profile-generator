const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe('D123');
  expect(intern.email).toBe('dave@company.com');
  expect(intern.school).toBe('daveard');
  expect(intern.role).toBe('Intern');
});

test('gets intern\'s name', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets intern\'s id', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test('gets intern\'s email', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern\'s school', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('gets intern\'s role', () => {
  const intern = new Intern('Dave', 'D123', 'dave@company.com', 'daveard');

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
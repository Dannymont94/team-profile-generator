const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com', 'davehub');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe('D123');
  expect(engineer.email).toBe('dave@company.com');
  expect(engineer.github).toBe('davehub');
  expect(engineer.role).toBe('Engineer');
});

test('gets engineer\'s name', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com');

  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineer\'s id', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com');

  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test('gets engineer\'s email', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com');

  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer\'s github', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('gets engineer\'s role', () => {
  const engineer = new Engineer('Dave', 'D123', 'dave@company.com');

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
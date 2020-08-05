const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('Dave', 'D123', 'dave@company.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('123');
  expect(employee.email).toBe('dave@company.com');
  expect(employee.role).toBe('Employee');
});

test('gets employee\'s name', () => {
  const employee = new Employee('Dave', 'D123', 'dave@company.com');

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee\'s id', () => {
  const employee = new Employee('Dave', 'D123', 'dave@company.com');

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets employee\'s email', () => {
  const employee = new Employee('Dave', 'D123', 'dave@company.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets employee\'s role', () => {
  const employee = new Employee('Dave', 'D123', 'dave@company.com');

  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
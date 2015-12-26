import { Application } from 'Application.js';

describe('A test suite', function() {
  it('should have working tests', function() {
    let application = new Application({});
    expect(application.message).toBe('Hello, world');
  });
});
import { Game } from '../src/game';

describe('the game', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  it('creates a game', () => {
    const game = new Game();
    expect(game).toBeTruthy();
  });

  it('returns the score', () => {
    const game = new Game();
    expect(game.score()).toBe(0);
  });
});

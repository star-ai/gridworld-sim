import React from 'react';
import Gridworld2d, { Actions } from '../../src/lib/envs/gridworld';

test('test gridworld2d environment init', () => {
  const gwEnv = new Gridworld2d();
  expect(gwEnv.actionsN).toBe(4);
  expect(gwEnv.statesN).toBe(16);
  expect(gwEnv.transitions.length).toBe(16);
});

test('test gridworld2d env transitions', () => {
  const gwEnv = new Gridworld2d();

  // Transition from left upper conner up
  let transition = gwEnv.sample(0, Actions.UP)[0];
  expect(transition.newState).toBe(0);
  expect(transition.done).toBeTruthy();
  expect(transition.reward).toBe(0);

  // Transition from left upper conner left
  transition = gwEnv.sample(0, Actions.LEFT)[0];
  expect(transition.newState).toBe(0);

  // Transition from left upper conner right
  transition = gwEnv.sample(0, Actions.RIGHT)[0];
  console.log('TRANS', transition);
  expect(transition.newState).toBe(0);
  expect(transition.reward).toBe(0);
  expect(transition.done).toBeTruthy();

  // Transition from right upper conner right
  transition = gwEnv.sample(3, Actions.RIGHT)[0];
  expect(transition.newState).toBe(3);

  // Transition from left bottom conner left
  transition = gwEnv.sample(12, Actions.LEFT)[0];
  expect(transition.newState).toBe(12);

  // Transition from left bottom conner up
  transition = gwEnv.sample(12, Actions.UP)[0];
  expect(transition.newState).toBe(8);

  // Transition from left bottom conner down
  transition = gwEnv.sample(12, Actions.DOWN)[0];
  expect(transition.newState).toBe(12);

  // Transition from right bottom conner RIGHT
  transition = gwEnv.sample(15, Actions.RIGHT)[0];
  expect(transition.newState).toBe(15);

  // Transition from middle position up
  transition = gwEnv.sample(10, Actions.UP)[0];
  expect(transition.newState).toBe(6);
  expect(transition.done).toBeFalsy();
  expect(transition.reward).toBe(-1);
});
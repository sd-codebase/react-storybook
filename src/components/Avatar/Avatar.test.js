import { render, screen } from "@testing-library/react";

import imgSrc from '../../../public/robot.jpg';
import { Avatar } from "./Avatar.component";

test('Image Avatar should render', () => {
  let props = {avatar:{imgSrc, name: 'Krishna'}, size: 'medium', variant: 'purple'};
  
  render(<Avatar {...props}></Avatar>);
  
  const avatarContainer = screen.queryByTestId('avatar-container');
  const avatarImage = screen.queryByTestId('avatar-image');

  expect(avatarContainer).toBeTruthy();
  expect(avatarImage).toBeTruthy();

  expect(avatarContainer).toHaveClass(...['purple', 'medium']);

  expect(avatarImage).toHaveAttribute('src', 'robot.jpg');

  const extra = screen.queryByTestId('avatar-extra');
  const avatarText = screen.queryByTestId('avatar-text');

  expect(extra).toBeNull();
  expect(avatarText).toBeNull();
});

test('Text Avatar should render', () => {
  let props = {avatar:{name: 'Krishna'}, size: 'medium', variant: 'purple'};
  
  render(<Avatar {...props}></Avatar>);

  const avatarContainer = screen.queryByTestId('avatar-container');
  const avatarText = screen.queryByTestId('avatar-text');

  expect(avatarContainer).toBeTruthy();
  expect(avatarText).toBeTruthy();

  expect(avatarContainer).toHaveClass(...['purple', 'medium']);

  expect(avatarText.textContent).toContain('K');

  const extra = screen.queryByTestId('avatar-extra');
  const avatarImage = screen.queryByTestId('avatar-image');

  expect(extra).toBeNull();
  expect(avatarImage).toBeNull();
});

test('Extra count avatar should render', () => {
  let props = {size: 'medium', variant: 'purple', extraCount: 5};
  
  render(<Avatar {...props}></Avatar>);

  const avatarContainer = screen.queryByTestId('avatar-container');
  const extra = screen.queryByTestId('avatar-extra');

  expect(avatarContainer).toBeTruthy();
  expect(extra).toBeTruthy();

  expect(avatarContainer).toHaveClass(...['purple', 'medium']);

  expect(extra.textContent).toContain('5');

  const avatarText = screen.queryByTestId('avatar-text');
  const avatarImage = screen.queryByTestId('avatar-image');

  expect(avatarText).toBeNull();
  expect(avatarImage).toBeNull();
});

test('Grouped item should render', () => {
  let props = {avatar:{name: 'Krishna'}, size: 'medium', variant: 'purple', isGroupedItem: true};
  
  render(<Avatar {...props}></Avatar>);

  const avatarContainer = screen.queryByTestId('avatar-container');

  expect(avatarContainer).toBeTruthy();

  expect(avatarContainer).toHaveClass(...['purple', 'medium', 'groupedItem']);
});

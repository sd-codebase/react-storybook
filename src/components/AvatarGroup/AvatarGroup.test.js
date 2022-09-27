import { render, screen } from "@testing-library/react";

import imgSrc from '../../../public/robot.jpg';
import { AvatarGroup } from "./AvatarGroup.component";

const name = 'Krishna';
const props= {users: [{imgSrc, name}, {name}, {imgSrc, name}, {imgSrc, name}], size: 'medium', variant: 'purple'};

test('Avatar group should render', () => {
  render(<AvatarGroup {...props}></AvatarGroup>);

  const avatarContainer = screen.queryAllByTestId('avatar-container');
  const avatarImage = screen.queryAllByTestId('avatar-image');
  const avatarText = screen.queryAllByTestId('avatar-text');
  const avatarExtra = screen.queryAllByTestId('avatar-extra');

  expect(avatarContainer.length).toBe(3);
  expect(avatarImage.length).toBe(1);
  expect(avatarText.length).toBe(1);
  expect(avatarExtra.length).toBe(1);

  expect(avatarImage[0]).toHaveAttribute('src', 'robot.jpg');
  expect(avatarText[0].textContent).toContain('K');
  expect(avatarExtra[0].textContent).toContain('2');
});
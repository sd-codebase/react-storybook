import { render, screen } from "@testing-library/react";
import { Image } from "./Image.component";

import imgSrc from '../../../public/robot.jpg';

test('Image should render', () => {
  let props = {imgSrc, alt: 'Alt Text', size: 'medium', variant: 'purple'};
  
  render(<Image {...props}></Image>);

  const imageContainer = screen.getByTestId('image-container');
  const image = screen.getByTestId('image');

  expect(imageContainer).toBeTruthy();
  expect(image).toBeTruthy();

  expect(image).toHaveAttribute('alt', 'Alt Text');
  expect(image).toHaveAttribute('src', 'robot.jpg');
});

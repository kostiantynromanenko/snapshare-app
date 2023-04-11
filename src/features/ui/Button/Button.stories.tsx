import type { Meta, StoryObj } from '@storybook/react';
import { THEME_VARIANTS } from '@features/theme';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  argTypes: {
    variant: {
      options: THEME_VARIANTS,
      control: { type: 'radio' }
    }
  }
};

import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyles } from '../src/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ]
};

export default preview;

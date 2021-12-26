import { addDecorator } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

addDecorator(withDesign);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

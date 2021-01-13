import { themes } from '@storybook/theming';


//specify theme for docs
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
}
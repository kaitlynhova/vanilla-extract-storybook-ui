import { lightThemeClass } from "../theme/theme.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeClass = (Story, context) => {
  return (
    <div className={lightThemeClass}>
      <Story {...context} />
    </div>
  );
};

export const decorators = [withThemeClass];

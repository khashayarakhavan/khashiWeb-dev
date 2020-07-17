import colors, { ColorsThemeFelal } from "./colors";

export const ThemeFelal = {
         main: ColorsThemeFelal.grayDark,
         foreground: 'blue',
         background: 'lightblue',
         header: 'yellow',
         mode: "felal",
         size: "normal",
       };

export const ThemeLight = {
         main: colors.greenDark,
         foreground: colors.grayDarker,
         background: colors.grayLighter,
         mode: "light",
         size: "large",
         linkColor: "darkviolet",
         header: "yellow",
       };

export const ThemeDark = {
         main: "blue",
         mode: "dark",
         foreground: colors.grayLighter,
         background: colors.grayDarker,
         size: "normal",
         linkColor: "#FFFF00",
         header: "yellow",
       };

export const noChange = ({ mode, main, ...props }) => ({
  mode,
  main,
  ...props
});

export const invertTheme = ({ foreground, background, ...props }) => ({
  foreground: background,
  background: foreground,
  ...props,
});
 
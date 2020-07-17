import theme from "../themes.controller";
import colors, {ColorsThemeFelal} from "../colors";

export const buttonColor = theme("mode", {
  light: colors.black,
  dark: colors.white,
  felal: colors.redDark,
});

export const Headerbackground = theme("mode", {
  light: "white",
  dark: colors.grayDarker,
  felal: "red",
});

export const backgroundColor = theme("mode", {
  light: colors.grayLighter,
  dark: colors.grayDark,
  felal: ColorsThemeFelal.primary__dark,
});

export const buttonBackgroundColor = theme.variants("mode", "kind", {
         default: {
           light: colors.grayLighter,
           dark: colors.grayLight,
           felal: colors.grayLighter,
         },
         primary: {
           light: colors.blueLight,
           dark: colors.blueDark,
           felal: ColorsThemeFelal.primary__light,
         },
         success: {
           light: colors.redDark,
           dark: colors.greenDark,
           felal: ColorsThemeFelal.primary__light,
         },
         warning: {
           light: colors.yellowLight,
           dark: colors.yellowDark,
           felal: ColorsThemeFelal.primary__light,
         },
         danger: {
           light: colors.redLight,
           dark: colors.redDark,
           felal: ColorsThemeFelal.primary__dark,
         },
       });

export const boxBackgroundColor = theme("mode", {
  light: colors.white,
  dark: colors.grayDarker,
});

export const boxColor = theme("mode", {
  light: colors.grayDarker,
  dark: colors.grayLighter,
});
import { createSelector } from "reselect";

const selectMode = (state) => state.mode;

export const selectDarkMode = createSelector(
  [selectMode],
  mode => mode.darkMode
);

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { Button } from './button.styles';

export const ButtonMode = ({ toggleDarkMode, darkMode }) => (
         <Button kind="warning" onClick={toggleDarkMode} darkMode>
           DarkModeBtn
         </Button>
       );
       
const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkMode,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonMode);

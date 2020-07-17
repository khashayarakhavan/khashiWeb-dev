
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from "./mode/index";
import { fontSize } from "./sizes/index";

import { selectDarkMode } from "../redux/themes/themes.selectors";

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme && props.theme.foreground};
		
		${
      "" /* background-color: ${(props) => props.darkMode ? 'black' : backgroundColor}; */
    }
		
		${"" /* color: ${(props) => props.darkMode ? 'white' : 'black'}; */}
		
		font-size: ${fontSize};
		
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a,
	a:link,
	a:hover {
		text-decoration: none;
		color: ${(props) => props.theme.foreground };
		
	}

	* {
		box-sizing: border-box;
		transition: background-color .3s ease-out;
		
	}
`;

const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(GlobalStyle);

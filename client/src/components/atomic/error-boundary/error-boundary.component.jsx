import React from 'react';
import {
  ErrorImageContainer, ErrorImageOverlay,

  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          {/* <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' /> */}
          <ErrorImageContainer imageUrl="https://banner2.cleanpng.com/20180304/wpe/kisspng-web-development-http-404-world-wide-web-website-we-blue-cartoon-monster-5a9c0ec981df50.615012421520176841532.jpg" />
          <ErrorImageText>Ooops ! something bad happened :( </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

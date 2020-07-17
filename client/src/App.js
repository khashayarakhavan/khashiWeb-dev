import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from "styled-components";
import ErrorBoundary from './components/atomic/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import FirebasePage from "./pages/firebaseDBupload/firebaseDB.components";
import { selectDarkMode } from "./redux/themes/themes.selectors";
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import GlobalStyle from './themes/global.styles';
import {
  invertTheme, noChange,

  ThemeLight
} from "./themes/themes";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const LandingPage = lazy(() => import('./pages/landingpage/landingpage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser, darkMode }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <ThemeProvider theme={ThemeLight}> 
      <ThemeProvider theme={darkMode ? invertTheme : noChange}>
        <div>
          <GlobalStyle darkMode />
          <ThemeProvider theme={noChange}>
            <Header darkMode />
          </ThemeProvider>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/landing" component={LandingPage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                  exact
                  path="/firebaseDBUpload"
                  component={FirebasePage}
                />

                <Route
                  exact
                  path="/signin"
                  render={() =>
                    currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                  }
                />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch an action object which takes the user an returns an object with user inside its payload.
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

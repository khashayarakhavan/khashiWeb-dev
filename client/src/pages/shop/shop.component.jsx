import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(
  () => import('../../components/complex/collections-overview/collections-overview.component')
);

const CollectionPageContainer = lazy(() =>
  
  import('../collection/collection.component')
);

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

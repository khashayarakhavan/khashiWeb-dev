import { createSelector } from 'reselect';
import memoize from "lodash.memoize";

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// }

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// export const selectShopItems = createSelector(
//   [selectShop],
//   shop => shop.collections
// );

// This selector converts an object to an array when neccessary to map it. 
// it is used in collections-overview.component.jsx
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null ) //the collection.urlparam is what we have using match from React router.
  )
);

// This selector is used only if our data is not normalized and is in array form.
// so we can use '.find' method on it. and also use a data map function 
// to convert and map data url string to an id.
// export const selectCollectionUsingArrayData = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => collections.find(
//       collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

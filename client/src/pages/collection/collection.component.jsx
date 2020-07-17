import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/atomic/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import {
  CollectionItemsContainer, CollectionPageContainer,
  CollectionTitle
} from "./collection.styles";

export const CollectionPage = ({ collection }) => {
  // items is an array so we can `.map` over it.
  // big arrays are better to be changed to hash tables or JS objects for performance optimization.
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // Pay attention:
  // here we can also change this to an object in the DB and then change it to array using `object.key()` method.
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

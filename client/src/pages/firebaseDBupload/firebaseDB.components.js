import React, {  useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./firebaseDB.styles.scss";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { addCollectionAndDocuments } from "../../firebase/firebase.utils";

export const FirebasePage = ({ collectionsArray }) => {
  const [upload, setUpload] = useState(false);

  const clickHandler = async (event) => {
    event.preventDefault();
    await addCollectionAndDocuments(
      "collections",
      collectionsArray.map(({ title, items }) => ({ title, items }))
    );
    console.log('Added in Firestore :D');
    setUpload(true);

  };

  return (
    <p>
      {!upload ? (
        <button className="fireButton" onClick={clickHandler}>
          Upload to Firestore
        </button>
      ) : (
        <marquee>Data Uploaded Successfully to your DB in Firestore!!!</marquee>
      )}
    </p>
  );
};
  
const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(FirebasePage);

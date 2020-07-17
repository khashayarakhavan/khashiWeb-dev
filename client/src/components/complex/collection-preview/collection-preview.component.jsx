import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../../atomic/collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer, TitleContainer
} from './collection-preview.styles';

// Data Flow note:
// items are filtered here inside of the component.
// No need for external seperation using selectors.
export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName
}) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);

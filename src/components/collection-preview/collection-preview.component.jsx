import React from "react";
import { withRouter } from 'react-router-dom';
import "./collection-preview.styles.jsx";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContaier, PreviewContainer, TitleContainer } from "./collection-preview.styles.jsx";

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <CollectionPreviewContaier>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContaier>
);

export default withRouter(CollectionPreview);


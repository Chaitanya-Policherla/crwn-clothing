import React from "react";
import "./collection-preview.styles.jsx";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContaier, PreviewContainer, TitleContainer } from "./collection-preview.styles.jsx";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContaier>
    <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContaier>
);

export default CollectionPreview;


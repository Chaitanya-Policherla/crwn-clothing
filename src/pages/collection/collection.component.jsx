import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollectionItems} from '../../redux/shop/shop.selectors';
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles';


const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item=>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionItemsContainer>
    </CollectionPageContainer>
    
)};

const mapStateToProps = (state, ownParams) => {
    return ({
        collection: selectCollectionItems(ownParams.match.params.collectionId)(state)
    });
}

export default connect(mapStateToProps)(CollectionPage);

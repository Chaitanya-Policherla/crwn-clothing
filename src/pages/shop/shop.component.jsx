import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOveriew from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const Shop = ({match}) =>(
    <div className="shopPage">
        <Route path={`${match.path}`} exact component={CollectionsOveriew} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> 
    </div>
    );
export default Shop;
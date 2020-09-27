import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], 
    shop => Object.keys(shop.collections).map(key => shop.collections[key])
    );

export const selectCollectionItems = collectionURLParam => (createSelector(
    [selectShop],
    shop => shop.collections[collectionURLParam]
));
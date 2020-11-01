import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], 
    shop => shop.collections? Object.keys(shop.collections).map(key => shop.collections[key]) : []
    );

export const selectCollectionItems = collectionURLParam => (createSelector(
    [selectShop],
    shop => shop.collections? shop.collections[collectionURLParam] : null
));

export const isShopFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const isCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
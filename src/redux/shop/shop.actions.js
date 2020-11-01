import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import ShopActionTypes from './shop.types';

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsFailure = (msg) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: msg
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error=> dispatch(fetchCollectionsFailure(error.message)));
    }
    
};

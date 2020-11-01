import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';

import { isShopFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOveriew from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: isShopFetching
});



const CollectionsOveriewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsOveriew);

export default CollectionsOveriewContainer;
import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionPageContainer from '../collection/collection.container';

import CollectionsOveriewContainer from '../../components/collections-overview/collections-overview.container';


class Shop extends React.Component {

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shopPage">
                <Route path={`${match.path}`} exact component={CollectionsOveriewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 
            </div>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync:  () => dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToProps)(Shop);
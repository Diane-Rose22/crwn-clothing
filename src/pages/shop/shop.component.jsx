import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching, selectIsColectionsLoaded} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, isCollectionLoaded, fetchCollectionsStart}) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className={
            'shop-page'
        }>
            <Route exact path={`${match.path}`}
                   render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
            />
            <Route path={`${match.path}/:collectionId`}
                   render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsColectionsLoaded,
})
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
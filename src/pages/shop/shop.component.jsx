import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import {selectIsColectionsLoaded} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match}) => {
    const isCollectionLoaded = useSelector(selectIsColectionsLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

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

export default ShopPage;
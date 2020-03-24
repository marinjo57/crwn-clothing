import React from 'react';
import {connect} from 'react-redux';
import './collections-overview.styles.css';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (<div className='collections-overview'>
  {
    collections.map(({
      id,
      ...OtherCollectionProps
    }) => (<CollectionPreview key={id} { ...OtherCollectionProps }/>))
  }
</div>)

const mapStateToProps = createStructuredSelector({collections: selectCollectionForPreview})

export default connect(mapStateToProps)(CollectionsOverview);

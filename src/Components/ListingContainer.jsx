import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/ListingContainer.css'
import ListingCard from './ListingCard';

class ListingContainer extends Component {
    render() {
        return (
            <div className='listingContainerCardContents p-grid'>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
            </div>
        );
    }
}

ListingContainer.propTypes = {};

export default ListingContainer;
    
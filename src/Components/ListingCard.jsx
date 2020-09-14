import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'primereact/card';
import '../Css/ListingCard.css'
import {Button} from 'primereact/button';

class ListingCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const header = <img alt="Card" className={'cardHeaderImage'} src={this.props.previewImage}/>;

        return (
            <div className={'p-xl-6 p-lg-12 p-md-6 p-sm-6 listingCardContainer'}>
                <button className={'cardWrapperButton'} onClick={this.props.listingDetailCardClick}>
                    <Card title="$2940/mo" subTitle="2 bds | 2 ba" header={header} className={'listingCard'}>
                        4204 Clarinbridge Dr, Dublin, CA, 94568
                    </Card>
                </button>
            </div>
        );
    }
}

ListingCard.propTypes = {};

export default ListingCard;
    
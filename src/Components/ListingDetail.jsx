import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog} from 'primereact/dialog';

class ListingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <Dialog header="Header" visible={true} style={{width: '50vw'}}>
                    {/*// footer={this.renderFooter('displayBasic')}*/}
                    onHide={}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Dialog>
            </div>

        );
    }
}

ListingDetail.propTypes = {};

export default ListingDetail;

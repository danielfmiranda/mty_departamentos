import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog} from 'primereact/dialog';
import '../Css/LogInModal.css'

class LogInModal extends Component {
    render() {
        return (
            <Dialog
                className={'logInModal'}
                visible={this.props.isLogInModalActive}
                // visible={true}
                onHide={this.props.closeLogInModal}
            >

                <div className={'logInModelContentContainer'} >
                    <h2 className={'logInModalHeading'}> Welcome to depas MTY!</h2>

                </div>
            </Dialog>
        );
    }
}

LogInModal.propTypes = {};

export default LogInModal;
    
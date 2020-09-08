import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog} from 'primereact/dialog';
import {TabMenu} from 'primereact/tabmenu';
import '../Css/LogInModal.css'
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';

class LogInModal extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Log In'},
                {label: 'Sign Up'},
            ],
            activeItem: {label: 'Log In'}
        };

    }

    render() {
        const logInSignUpForm = (
            this.state.activeItem.label === 'Log In' ? (
                <div className={'logInForm'}>
                    <h5>Username</h5>
                    <InputText
                        className={'logInInput'}
                        value={this.state.logInUsername}
                        onChange={(e) => this.setState({logInUsername: e.target.value})}/>
                    <h5>Password</h5>
                    <Password
                        className={'logInInput'}
                        feedback={false}
                        value={this.state.logInPassword}
                        onChange={(e) => this.setState({logInPassword: e.target.value})}/>
                    <Button className={'logInSignUpFormButton'} label="Log In"/>
                </div>
            ) : (
                <div className={'logInForm'}>
                    <h5>Username</h5>
                    <InputText
                        className={'logInInput'}
                        value={this.state.signUpUsername}
                        onChange={(e) => this.setState({signUpUsername: e.target.value})}/>
                    <h5>Password</h5>
                    <Password
                        className={'logInInput'}
                        feedback={true}
                        value={this.state.signUpPassword}
                        onChange={(e) => this.setState({signUpPassword: e.target.value})}/>
                   <div className="p-field-checkbox landLordCheckBox">
                        <Checkbox inputId="binary" checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                        <label htmlFor="binary">I am a landlord</label>
                    </div>
                    <Button className={'logInSignUpFormButton'} label="Sign Up"/>

                </div>
            )
        )

        return (
            <Dialog
                className={'logInModal'}
                visible={this.props.isLogInModalActive}
                // visible={true}
                onHide={this.props.closeLogInModal}
            >

                <div className={'logInModelContentContainer layout-wrapper p-input-filled'}>
                    <h2 className={'logInModalHeading'}> Welcome to Depas MTY!</h2>
                    <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                             onTabChange={(e) => this.setState({activeItem: e.value})}
                    />
                    {logInSignUpForm}
                </div>
            </Dialog>
        );
    }
}

LogInModal.propTypes = {};

export default LogInModal;

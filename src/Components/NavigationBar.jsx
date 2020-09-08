import React, {Component} from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {TabMenu} from 'primereact/tabmenu';
import '../Css/NavigationBar.css'
import { Dropdown } from 'primereact/dropdown';


class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            city: 'USD'
        }
    }
    render() {

            const leftNavContents = (
        <>
            <h1> 🤠</h1>  <h3 className={'logoHeading'}> MTY Departamentos </h3>
        </>
    );

    const rightNavContents = (
        <>
            <Button label="Sign Up / Log In" className={'logInButton'} onClick={this.props.logInButtonClick}/>
        </>
    );



    const leftSubNavContents = (
        <>
            <Button label="Price" className="p-button-outlined subNavigationButton"/>
            <Button label="Beds & Baths" className="p-button-outlined subNavigationButton"/>
            {/*<Button label="Primary" className="p-button-outlined subNavigationButton"/>*/}
        </>
    );

const citySelectItems = [
    {label: '$USD', value: 'USD'},
    {label: '$MXN', value: 'MXN'},

];


    const rightSubNavContents = (
        <>
            <Dropdown  className={'currencyDropDown'} value={this.state.city} options={citySelectItems} onChange={(e) => {this.setState({city: e.value})}} placeholder="$USD"/>
        </>
    );

        return (
            <div>
                    <Toolbar className={'navigationBar'} left={leftNavContents} right={rightNavContents}/>
            <Toolbar className={'subNavigationBar'} left={leftSubNavContents} right={rightSubNavContents}/>

            </div>
        );
    }
}

NavigationBar.propTypes = {};

export default NavigationBar;

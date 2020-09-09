import React, {Component} from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {TabMenu} from 'primereact/tabmenu';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Dropdown} from 'primereact/dropdown';
import {SelectButton} from 'primereact/selectbutton';
import '../Css/NavigationBar.css'


class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            city: 'USD',
            bedRoomSelectOptions: ['Any', '0', '1', '2', '3', '4'],
            selectedBedRoomFilter: 'Any',
            bathRoomSelectOptions: ['Any', '1', '1.5', '2', '3', '4'],
            selectedBathRoomFilter: 'Any',
            minPriceOptions: [
                {label: '0+', value: '0'},
                {label: '200+', value: '200'},
                {label: '400+', value: '400'},
                {label: '600+', value: '600'},
                {label: '800+', value: '800'},
                {label: '1000+', value: '1000'},
                {label: '1200+', value: '1200'},
                {label: '1400+', value: '1400'},
                {label: '1600+', value: '1600'},
                {label: '1800+', value: '1800'},
            ],
            maxPriceOptions: [
                {label: '2000+', value: '2000'},
                {label: '2200+', value: '2200'},
                {label: '2400+', value: '2400'},
                {label: '2600+', value: '2600'},
                {label: '2800+', value: '2800'},
                {label: '3000+', value: '3000'},
                {label: '3500+', value: '3500'},
                {label: '4000+', value: '4000'},
                {label: '4500+', value: '4500'},
                {label: 'Any', value: 'Any'},
            ]

        }
    }


    render() {


        const leftNavContents = (
            <>
                <h1> 🤠</h1>  <h3 className={'logoHeading'}> Depas MTY </h3>
            </>
        );

        const rightNavContents = (
            <>
                <Button label="Sign Up / Log In" className={'logInButton'} onClick={this.props.logInButtonClick}/>
            </>
        );


        const leftSubNavContents = (
            <>
                <div className={'layout-wrapper p-input-filled'}>
                    <Button label="Price" className="p-button-outlined subNavigationButton"
                            onClick={(e) => this.priceOverlayPanel.toggle(e)} aria-haspopup
                            aria-controls="overlay_panel"/>
                    <OverlayPanel
                        ref={(el) => this.priceOverlayPanel = el}
                        showCloseIcon id="overlay_panel"
                        className={'priceButtonOverlayPanel'}>
                        <Dropdown
                            className={'priceDropDownFilter'}
                            value={this.state.minPriceFilter} options={this.state.minPriceOptions}
                            onChange={(e) => {
                                this.setState({minPriceFilter: e.value})
                            }} optionLabel="label" placeholder="Min"/>

                        <Dropdown
                            className={'priceDropDownFilter'}
                            value={this.state.maxPriceFilter} options={this.state.maxPriceOptions}
                            onChange={(e) => {
                                this.setState({maxPriceFilter: e.value})
                            }} optionLabel="label" placeholder="Max"/>
                    </OverlayPanel>
                    <Button
                        label="Beds & Baths"
                        className="p-button-outlined subNavigationButton"
                        onClick={(e) => this.bedBathOverlayPanel.toggle(e)}
                        aria-haspopup
                        aria-controls="overlay_panel"
                    />
                    <OverlayPanel
                        ref={(el) => this.bedBathOverlayPanel = el}
                        showCloseIcon id="overlay_panel"
                        // style={{width: '450px'}}
                        className={'priceButtonOverlayPanel'}
                    >
                        <h5> Bedrooms </h5>
                        <SelectButton
                            className={'selectFilterButtons'}
                            value={this.state.selectedBedRoomFilter}
                            options={this.state.bedRoomSelectOptions}
                            onChange={(e) => this.setState({selectedBedRoomFilter: e.value})}
                        />
                        <h5> Bathrooms </h5>
                        <SelectButton
                            className={'selectFilterButtons'}
                            value={this.state.selectedBathRoomFilter}
                            options={this.state.bathRoomSelectOptions}
                            onChange={(e) => this.setState({selectedBathRoomFilter: e.value})}
                        />

                    </OverlayPanel>
                </div>
            </>
        );

        const citySelectItems = [
            {label: '$USD', value: 'USD'},
            {label: '$MXN', value: 'MXN'},

        ];


        const rightSubNavContents = (
            <>
                <Dropdown className={'currencyDropDown'} value={this.state.city} options={citySelectItems}
                          onChange={(e) => {
                              this.setState({city: e.value})
                          }} placeholder="$USD"/>
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

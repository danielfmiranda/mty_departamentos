import React, {Component} from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Map from './Components/Map'
import PrimeReact from 'primereact/utils';
import ListingContainer from './Components/ListingContainer';
import LogInModal from './Components/LogInModal';
import ListingDetail from './Components/ListingDetail';


class App extends Component {
    constructor(props) {
        super(props);
        PrimeReact.ripple = true;
        this.state = {
            isLogInModalActive: false
        }
    }

    logInButtonClick = () => {
        this.setState({
            isLogInModalActive: true
        })
    }

    closeLogInModal = () => {
        this.setState({
            isLogInModalActive: false
        })
    }


    render() {
        return (
            <div className="App">

                <NavigationBar logInButtonClick={this.logInButtonClick}/>

                <div className="p-grid pageContentsContainer">
                    <div className=" p-xl-7 p-lg-8 p-md-0 mapComponentContainer">
                        <Map/>
                    </div>
                    <div className=" p-xl-5 p-lg-4 p-md-12 listingContainerCard">
                        <ListingContainer/>
                    </div>
                </div>
                {/*<LogInModal isLogInModalActive={this.state.isLogInModalActive} closeLogInModal={this.closeLogInModal}/>*/}
                <ListingDetail/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;


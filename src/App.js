import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import {Route } from 'react-router-dom';
import UserPageContainer from './components/user/user-container.jsx';
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./Login/Login";
import {initialize} from "./redux/appreducer"
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./api/Preloader";
let ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))
let DialogContainerWindow = React.lazy(()=> import('./components/Dialogs/Dialogs-container'))

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if(this.props.initialized === false  ){
            return <Preloader/>
        }
        debugger
    return (

        <div className="app-wrapper">
            < HeaderContainer/>
            < Nav/>
            <div className="app-wrapper-content">
                <Route path='/massages' render={() => <React.Suspense fallback={<div>Завантаження...</div>}>
                    <DialogContainerWindow/>
                </React.Suspense> }/>
                <Route path='/profile/:userId?' render={() =>
                    <React.Suspense fallback={<div>Завантаження...</div>}>
                        <ProfileContainer/>
                    </React.Suspense>
                    }/>
                <Route path='/user' render={() => <UserPageContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>

            </div>


        </div>


    )
}
}

let mapStateToProps = (state) =>{
    return{
        initialized:state.app.initialized
    }
}

export default compose(connect(mapStateToProps,{initialize}))(App)



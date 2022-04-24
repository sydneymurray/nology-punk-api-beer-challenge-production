import { useState } from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import SideBar from './containers/SideBar/SideBar';
import beerArray from "./data/data"

const App = () => {
    let [beers, setBeers] = useState(beerArray)

    return <>
        <div className="app-container">
            <Header/>
            <SideBar beerArray={beerArray} setBears={setBeers}/>
            <Main beers={beers}/>)
        </div>
    </>
}

export default App;
 
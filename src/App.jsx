import { useState } from 'react';
import './App.scss';
import { BeerModal } from './components/beerModal/BeerModal';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import SideBar from './containers/SideBar/SideBar';
import beerArray from "./data/data"

const App = () => {
    let [beers, setBeers] = useState(beerArray)
    let [selectedBeer, setSelectedBeer] = useState(null)
    let [searchText, setSearchText] = useState("")
    let [showHighABV, setShowHighABV] = useState(false)
    let [showClassic, setShowClassic] = useState(false)
    let [showAcidity, setShowAcidity] = useState(false)

    return <>
        <div className="app-container">
            <Header/>
            
            <SideBar beerArray={beerArray} setBeers={setBeers}
                searchText={searchText} setSearchText={setSearchText}
                showHighABV={showHighABV} setShowHighABV={setShowHighABV}
                showClassic={showClassic} setShowClassic={setShowClassic}
                showAcidity={showAcidity} setShowAcidity={setShowAcidity}/>

            <Main beers={beers} searchText={searchText} setSearchText={setSearchText} showHighABV={showHighABV} 
                showClassic={showClassic} showAcidity={showAcidity} setSelectedBeer={setSelectedBeer}/>

            {selectedBeer && <BeerModal selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>}
        </div>
    </>
}

export default App;


import {useState, useEffect} from 'react';
import './App.scss';
import { BeerModal } from './components/beerModal/BeerModal';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import SideBar from './containers/SideBar/SideBar';
import beerArray from "./data/data"

const App = () => {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [showHighABV, setShowHighABV] = useState(false)
    const [showClassic, setShowClassic] = useState(false)
    const [showAcidity, setShowAcidity] = useState(false)
    let fetchPageNumber = 1
    let allBeers = []

    const getBeers = page => {
        if (fetchPageNumber > 20) return
        console.log("Fetching: https://api.punkapi.com/v2/beers?page=" + page)
        fetch("https://api.punkapi.com/v2/beers?page=" + page)
            .then(resp => resp.json())
            .then(newBeers => {
                allBeers = [...allBeers, ...newBeers]
                setBeers(allBeers)
                fetchPageNumber++
            })
    }
    useEffect(() => {getBeers(fetchPageNumber)},[]) 
    useEffect(() => {setInterval(() => {getBeers(fetchPageNumber)}, 4000)},[]) 
    
    if (!beers) return

    return <>
        <div className="app-container">
            <Header/>

            <SideBar searchText={searchText} setSearchText={setSearchText}
                showHighABV={showHighABV} setShowHighABV={setShowHighABV}
                showClassic={showClassic} setShowClassic={setShowClassic}
                showAcidity={showAcidity} setShowAcidity={setShowAcidity}/>

            <Main beers={beers} searchText={searchText} setSearchText={setSearchText} 
                showHighABV={showHighABV} showClassic={showClassic} showAcidity={showAcidity} 
                selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>

            {selectedBeer && <BeerModal selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer}/>}

        </div>
    </>
}

export default App;


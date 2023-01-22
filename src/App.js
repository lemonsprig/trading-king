import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { StockDetailPage } from './pages/StockDetailPage';
import { StockOverviewPage } from './pages/StockOverviewPage';
import './App.css';
import { WatchListContextProvider } from './context/watchListContext';


const finHubAPIKey  = 'cf4laqaad3i7dbfhr8a0cf4laqaad3i7dbfhr8ag'

function App() {
  return (
    <main className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />}></Route>
            <Route path="/detail/:symbol" element={<StockDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;

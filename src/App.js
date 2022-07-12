import Home from './components/Home.js';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import SellNFT from './components/ListNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/market" element={<Marketplace />}/>
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>
          <Route path="/list" element={<SellNFT />}/>             
        </Routes>
    </div>
  );
}

export default App;

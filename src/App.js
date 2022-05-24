import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import BootstrapNavbar from './BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import dotenv from 'dotenv';
import logo from './NAGA_round.ico';
import {BASE_URL} from './settings.json'


console.log("settings.json", BASE_URL)

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/api/coins` )
      .then(res => {
        setCoins(res.data.listdata);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app py-1 md-4'>

      <BootstrapNavbar></BootstrapNavbar>
      <title>Naga marketcap</title>
      <link rel="icon" href="/favicon.ico" />

      <h1 className="py-4 px-md-4 flex"><img src={logo} alt="Logo" className="logo flex" />Today's Cryptocurrency Prices - Top 150</h1>

      <div className='coin-search flex'>

        <form className='flex'>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (



          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;

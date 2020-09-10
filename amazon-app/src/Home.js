import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
          <div className="home_container">
            <img
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/GW_1500x600_Apex_Roblox_LoL._CB408348441_.jpg"
            />
          </div>
        <div className="home_row">
          <Product title="The lean Startup"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={5}
            />
          <Product title="Samsung Curved LED Monitor"
              price={199.99}
              image="https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg"
              rating={4}/>
        </div>

        <div className="home_row">
          <Product title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal"
              price={74.98}
              image="https://images-na.ssl-images-amazon.com/images/I/61NqDOhYukL._AC_SL1000_.jpg"
              rating={5}/>
          <Product title="Kindle Oasis – Now with adjustable warm light"
              price={269.99}
              image="https://images-na.ssl-images-amazon.com/images/I/614TlIaYBvL._AC_SL1000_.jpg"
              rating={4}/>
          <Product title="Echo Sub - Powerful subwoofer for your Echo - requires compatible Echo device"
              price={129.99}
              image="https://images-na.ssl-images-amazon.com/images/I/61xQloAs85L._AC_SL1000_.jpg"
              rating={4}/>
        </div>

        <div className="home_row">
          <Product title="CAP 7-Foot Olympic Bar for Weightlifting and Power Lifting | Various Specialty Bars"
              price={294.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71ITkUBvSjL._AC_SL1500_.jpg"
              rating={5}/>
        </div>

    </div>
    );
}

export default Home

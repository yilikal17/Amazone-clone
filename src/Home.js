import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1700}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Broan-NuTone AE110 Invent Flex ENERGY STAR Qualified Single-Speed Ventilation Fan, 110 CFM 1.0 Sones, White"
            price={97.15}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg" />
           image="https://m.media-amazon.com/images/I/71X7wLqU14L._AC_SX679_.jpg" />
        
          <Product
            id="99903850"
            title="Amazon Basics Kitchen Storage Microwave Rack Cart on Caster Wheels with Adjustable Shelves, 175-Pound Capacity - Chrome/Wood"
            price={69.66}
            rating={4}
            image="https://m.media-amazon.com/images/I/41LiSF+U3XL._AC_SY328_.jpg"
          />
          <Product
            id="3254354345"
            title="Moen 3942SRS Deck Mounted Kitchen Soap Dispenser with Above the Sink Refillable Bottle, Spot Resist Stainless"
            price={42.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/414ZqZfqesL._AC_SY328_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;




// https://www.freecodecamp.org/news/how-to-update-npm-dependencies/
// https://www.freecodecamp.org/news/how-to-update-npm-dependencies/


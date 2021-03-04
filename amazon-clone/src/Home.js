import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
        alt=""
      />
      {/* Product Info */}
      <div className="home__row">
        <Product
          id="123"
          title="Start on your holiday list early"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
        />
        <Product
          id="123"
          title="Beauty picks"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Explore home bedding"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
        />
        <Product
          id="123"
          title="Create with strip lights"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
        />
        <Product
          id="123"
          title="Computers & Accessories"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
          id="123"
          title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61x0OuU9XtL._AC_SL1000_.jpg"
        />

      </div>
    </div>
  );
}

export default Home;

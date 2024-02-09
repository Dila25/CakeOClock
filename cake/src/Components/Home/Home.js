import React from "react";
import Header from "../Header/Header";
import catimg1 from "./img/Rectangle 19.png";
import catimg2 from "./img/Rectangle 21.png";
import catimg3 from "./img/Rectangle 23.png";
import catimg4 from "./img/Rectangle 24.png";
import collectionimg from "./img/product.png";
import about from "./img/about.png";
import { FaBagShopping } from "react-icons/fa6";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="background2">
        <Header />
        <div className="full-bdy">
          {/* {Slider Section } */}
          <div className="slider"></div>
          {/* {CATEGORIES Section } */}
          <div className="catagoris">
            <div>
              <h1 className="cat-topic">CATEGORIES</h1>
              <div className="cat-box">
                <div>
                  <img src={catimg1} alt="logo" className="catimg" />
                  <p className="cat-img-name">Category</p>
                </div>
                <div>
                  <img src={catimg2} alt="logo" className="catimg" />
                  <p className="cat-img-name">Category</p>
                </div>
                <div>
                  <img src={catimg3} alt="logo" className="catimg" />
                  <p className="cat-img-name">Category</p>
                </div>
                <div>
                  <img src={catimg4} alt="logo" className="catimg" />
                  <p className="cat-img-name">Category</p>
                </div>
              </div>
            </div>
          </div>
          {/* {Collections Section } */}
          <div className="collection">
            <div className="collection-colum1">
              <h1 className="coletion-topic">Collections</h1>
              <p className="coletion-para">
                you can explore ans shop many differnt collection <br></br> from
                various barands here.
              </p>
              <button className="btnshop">
                <FaBagShopping className="shop-icon" />
                Shop Now
              </button>
            </div>
            <div className="collection-colum2">
              <img src={collectionimg} alt="logo" className="img-coll"></img>
            </div>
          </div>
          {/* {About Us Section } */}
          <div className="about-bk">
            <div className="collection">
              <div className="collection-colum1">
                <h1 className="about-topic">About Us</h1>
                <p className="about-para">
                  Coconuts are tropical fruits with a hard outer <br></br> husk,
                  a tough shell, and a deliciously sweet <br></br> , creamy
                  flesh inside. They are widely known <br></br> for their
                  versatility, providing coconut water, milk,<br></br> oil, and
                  grated coconut for culinary use. <br></br> Coconuts are a rich
                  source of healthy fats,<br></br> fiber, and essential
                  minerals, making them a <br></br> nutritious addition to
                  various dishes and<br></br>
                  beverages.
                </p>
                <button className="btnabout">Taste Drive</button>
              </div>
              <div className="collection-colum2">
                <img src={about} alt="logo" className="img-coll"></img>
              </div>
            </div>
          </div>
          {/* {Everyone Us Section } */}
          <div className="everyone">
            <h1 className="everyone-topic">A Price To Suit Everyone</h1>
            <p className="everyone-para">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
          </div>
             {/* {About Us Section } */}
             <div className="about-bk">
            <div className="collection">
              <div className="collection-colum1">
                <h1 className="about-topic">About Us</h1>
                <p className="about-para">
                  Coconuts are tropical fruits with a hard outer <br></br> husk,
                  a tough shell, and a deliciously sweet <br></br> , creamy
                  flesh inside. They are widely known <br></br> for their
                  versatility, providing coconut water, milk,<br></br> oil, and
                  grated coconut for culinary use. <br></br> Coconuts are a rich
                  source of healthy fats,<br></br> fiber, and essential
                  minerals, making them a <br></br> nutritious addition to
                  various dishes and<br></br>
                  beverages.
                </p>
                <button className="btnabout">Taste Drive</button>
              </div>
              <div className="collection-colum2">
                <img src={about} alt="logo" className="img-coll"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

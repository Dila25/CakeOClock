import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import seaimg1 from "../Home/img/Rectangle 13.png";
import seaimg2 from "../Home/img/Rectangle 14.png";
import seaimg3 from "../Home/img/Rectangle 15.png";
import seaimg4 from "../Home/img/Rectangle 16.png";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./cart.css";
function Cart() {
  return (
    <div>
      <div className="background-details">
        <Header />
        <br></br>
        <br></br>
        <div>
          {/* {Celebration Section } */}
          <div className="Full-Box-cel">
            <div className="cel-box">
              <h1 className="cel-box-topic">Cart</h1>
            </div>
            <br></br> <br></br> <br></br>
            <br></br>
            <br></br>
            <div className="dis-section">
              <div className="left-colum-dis"></div>
              <div className="right-colum-dis">
                <div>
                  <div className="1stbox">
                    <div className="right-colum-price-details">
                      <p className="right-colum-price-name"></p>
                      <p className="right-colum-price"></p>
                    </div>
                    <div className="right-colum-price-details">
                      <p className="right-colum-price-name"></p>
                      <p className="right-colum-price"></p>
                    </div>
                    <div className="right-colum-price-details">
                      <p className="right-colum-price-name"></p>
                      <p className="right-colum-price"></p>
                    </div>
                    <hr />
                  </div>
                  <div className="2ndbox">
                    <div className="right-colum-price-details">
                      <p className="right-colum-price-name"></p>
                      <p className="right-colum-price"></p>
                    </div>
                  </div>
                  <div className="box">
                    <form>
                      <p>Apply Coupon</p>
                      <input type="text" className="inputbox"></input>
                      <button className="inputtn">CHECKOUT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* {Seasons Section } */}
          <div>
            <h1 className="seasons-topic">
              Seasons Special
              <span className="seasons-sub-topic"> From Our Bakers</span>
            </h1>
            <div className="seasons">
              <div>
                <div className="sea-box">
                  <div className="seasons-card">
                    <img src={seaimg1} alt="seasons-img" className="seaimg" />
                    <p className="sea-img-name">Brownie mousse cake</p>
                    <div class="rating">
                      <label className="rating-star" for="star5">
                        ★
                      </label>
                      <label className="rating-star" for="star4">
                        ★
                      </label>
                      <label className="rating-star" for="star3">
                        ★
                      </label>
                      <label className="rating-star" for="star2">
                        ★
                      </label>

                      <label className="rating-star" for="star1">
                        ★
                      </label>
                    </div>
                  </div>
                  <div className="seasons-card">
                    <img src={seaimg2} alt="seasons-img" className="seaimg" />
                    <p className="sea-img-name">Layered strwberry delight</p>
                    <div class="rating">
                      <label className="rating-star" for="star5">
                        ★
                      </label>
                      <label className="rating-star" for="star4">
                        ★
                      </label>
                      <label className="rating-star" for="star3">
                        ★
                      </label>
                      <label className="rating-star" for="star2">
                        ★
                      </label>

                      <label className="rating-star" for="star1">
                        ★
                      </label>
                    </div>
                  </div>
                  <div className="seasons-card">
                    <img src={seaimg3} alt="seasons-img" className="seaimg" />
                    <p className="sea-img-name">choco cheese brownie</p>
                    <div class="rating">
                      <label className="rating-star" for="star5">
                        ★
                      </label>
                      <label className="rating-star" for="star4">
                        ★
                      </label>
                      <label className="rating-star" for="star3">
                        ★
                      </label>
                      <label className="rating-star" for="star2">
                        ★
                      </label>

                      <label className="rating-star" for="star1">
                        ★
                      </label>
                    </div>
                  </div>
                  <div className="seasons-card">
                    <img src={seaimg4} alt="seasons-img" className="seaimg" />
                    <p className="sea-img-name">caramel brownie</p>
                    <div class="rating">
                      <label className="rating-star" for="star5">
                        ★
                      </label>
                      <label className="rating-star" for="star4">
                        ★
                      </label>
                      <label className="rating-star" for="star3">
                        ★
                      </label>
                      <label className="rating-star" for="star2">
                        ★
                      </label>

                      <label className="rating-star" for="star1">
                        ★
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-view-more">
              <button className="btn-view">
                View More
                <FaArrowRight className="btn-view-icon" />
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <div></div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;

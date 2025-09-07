import React from "react";

const Apps = () => {
  return (
      <>
          <div className="row">
            <div className="col-2"></div>
              <div className="card col-4" style={{ width: "24rem" }}>
                <img 
                  src="images\varsity.png" 
                  className="card-img-top" 
                  alt="..." 
                />
                <div className="card-body">
                  <h5 className="card-title">Learn Trading</h5>
                  <p className="card-text">
                    Varsity by Zerodha is a free, open, and extensive online educational resource created by Zerodha to help people learn about the stock market and personal finance
                  </p>
                  <a href="" className="btn btn-primary" >Go somewhere</a>
                </div>
              </div>

              <div className="card col-4" style={{ width: "24rem" }}>
                <img 
                  src="images\coin.png" 
                  className="card-img-top" 
                  alt="..." 
                />
                <div className="card-body">
                  <h5 className="card-title">Coin</h5>
                  <p className="card-text">
                    Coin by Zerodha is a platform that allows users to invest in direct mutual funds without paying any commissions or brokerage fees
                  </p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="col-2"></div>
          </div>

          <div className="row">
            <div className="col-2"></div>
              <div className="card col-4" style={{ width: "24rem" }}>
                <img 
                  src="images\kite.png" 
                  className="card-img-top" 
                  alt="..." 
                />
                <div className="card-body">
                  <h5 className="card-title">Kite</h5>
                  <p className="card-text">
                    Zerodha Kite is Zerodha's flagship trading platform, designed for online trading and investment in the stock market
                  </p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card col-4" style={{ width: "24rem" }}>
                <img 
                  src="images\pulse.png" 
                  className="card-img-top" 
                  alt="..." 
                />
                <div className="card-body">
                  <h5 className="card-title">Pulse by Zerodha</h5>
                  <p className="card-text">
                    An initiative by Zerodha Broking Ltd to keep users aware of the full market coverage
                  </p>
                  <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="col-2"></div>
          </div>
      </>
    );

};

export default Apps;
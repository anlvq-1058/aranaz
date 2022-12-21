import React from "react"
import img from "../img/product/product_2.png"

function BestSeller() {
  return(
    <>
      <section className="product_list best_seller section_padding">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="section_tittle text-center">
                          <h2>Best Sellers <span>shop</span></h2>
                      </div>
                  </div>
              </div>
              <div className="row align-items-center justify-content-between">
                  <div className="col-lg-12">
                      <div className="best_product_slider owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer"><div className="owl-stage"><div className="owl-item cloned" style={{width: "262.5px", margin: "0 30px 0 0"}}><div className="single_product_item">
                              <img src={img} alt=""/>
                              <div className="single_product_text">
                                  <h4>Quartz Belt Watch</h4>
                                  <h3>$150.00</h3>
                              </div>
                          </div></div><div className="owl-item cloned" style={{width: "262.5px", margin: "0 30px 0 0"}}><div className="single_product_item">
                          <img src={img} alt=""/>
                              <div className="single_product_text">
                                  <h4>Quartz Belt Watch</h4>
                                  <h3>$150.00</h3>
                              </div>
                          </div></div><div className="owl-item cloned" style={{width: "262.5px", margin: "0 30px 0 0"}}><div className="single_product_item">
                              <img src={img} alt=""/>
                              <div className="single_product_text">
                                  <h4>Quartz Belt Watch</h4>
                                  <h3>$150.00</h3>
                              </div>
                          </div></div><div className="owl-item cloned" style={{width: "262.5px", margin: "0 30px 0 0"}}><div className="single_product_item">
                              <img src={img} alt=""/>
                              <div className="single_product_text">
                                  <h4>Quartz Belt Watch</h4>
                                  <h3>$150.00</h3>
                              </div>
                          </div></div>
                          
                          </div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev">next</button><button type="button" role="presentation" className="owl-next">previous</button></div><div className="owl-dots disabled"></div></div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default BestSeller
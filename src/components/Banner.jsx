import React from "react";
import img from "../img/banner_img.png";

function Banner() {
  return(
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="banner_slider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{transition: "all 1s ease 0s", width: "7980px"}}>
                                <div className="owl-item cloned" style={{width: "1140px"}}>
                                    <div className="single_banner_slider">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-8">
                                                <div className="banner_text">
                                                    <div className="banner_text_iner">
                                                        <h1>Cloth &amp; Wood Sofa</h1>
                                                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                            suspendisse ultrices gravida. Risus commodo viverra</p>
                                                        <a href="#" className="btn_2">buy now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="banner_img d-none d-lg-block">
                                            <img src={img} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev">next</button>
                            <button type="button" role="presentation" className="owl-next">previous</button>
                        </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                    <div className="slider-counter">01</div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner
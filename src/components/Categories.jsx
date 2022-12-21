import React from "react";
import img1 from "../img/feature/feature_1.png"
import img2 from "../img/feature/feature_2.png"
import img3 from "../img/feature/feature_3.png"
import img4 from "../img/feature/feature_4.png"

function Categories() {
  return(
    <>
      <section className="feature_part padding_top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section_tittle text-center">
                        <h2>Featured Category</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <a href="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></a>
                        <img src={img1} alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <a href="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></a>
                        <img src={img2} alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <a href="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></a>
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <a href="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></a>
                        <img src={img4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Categories

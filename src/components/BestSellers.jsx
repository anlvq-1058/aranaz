import React, { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from "../redux/actions/product";
import { selectProductSelector } from "../redux/selector";

import ProductItem from "./ProductItem";

function BestSeller() {
    const dispath = useDispatch();
    const products = useSelector(selectProductSelector);
    useEffect(() => {
        dispath(getProducts());
    }, []);

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
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                            { !!products.length ? (
                                <>
                                    {products.map((product) => 
                                        <ProductItem key={product.id} 
                                                     name={product.name}
                                                     price={product.price}
                                                     images={product.images}/>
                                    )}
                                </>
                            ) : (
                                <h2> Không có đâu </h2>
                            ) }
                          </div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev">next</button><button type="button" role="presentation" className="owl-next">previous</button></div><div className="owl-dots disabled"></div></div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default BestSeller
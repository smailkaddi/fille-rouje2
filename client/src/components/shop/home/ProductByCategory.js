import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../layout";

import { productByCategory } from "../../admin/products/FetchApi";


const apiURL = process.env.REACT_APP_API_URL;

const Submenu = ({ category }) => {
  const history = useHistory();
  return (
    
    <Fragment>
  
      
      <section className="mx-4 mt-24 md:mx-12 md:mt-32 ">
        <div className="flex justify-between items-center">
          <div className="text-sm flex space-x-3">
            <span
              className="hover:text-yellow-700 cursor-pointer"
              onClick={(e) => history.push("/")}
             >
              Nos produits
            </span>
            <span className="text-yellow-700 cursor-default">{category}</span>
          </div>
          <div>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </section>
    
    </Fragment>
  );
};

const AllProduct = ({ products }) => {
  const history = useHistory();
  const category =
    products && products.length > 0 ? products[0].pCategory.cName : "";
  return (
    <Fragment>
      <Submenu category={category} />
      <section className="m-4 md:mx-20 md:my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 card-proudct bg-gray-100 rounded-lg" >
        {products && products.length > 0 ? (
          products.map((item, index) => {
            return (
             

              <Fragment key={index}>
                <div className="relative col-span-1 m-2 ">
                  <img
                    onClick={(e) => history.push(`/products/${item._id}`)}
                    className="w-full object-cover object-center cursor-pointer rounded-lg"
                    src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                    alt=""
                  />
                  
                  <div className="flex items-center justify-between mt-2">
                    
                    <div className="text-gray-600 font-light truncate">
                      {item.pName}

                    </div>
                
                  </div>
                  <div>{item.pPrice}.00 DH  KG</div>
                  <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
            No product found
          </div>
        )}
      </section>
    </Fragment>
  );
};

const PageComponent = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await productByCategory(catId);
      if (responseData && responseData.Products) {
        setProducts(responseData.Products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <AllProduct products={products} />
    </Fragment>
  );
};

const ProductByCategory = (props) => {
  return (
    <Fragment>
      <Layout children={<PageComponent />} />
    </Fragment>
  );
};

export default ProductByCategory;

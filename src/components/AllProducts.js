import React, { Component, useState } from 'react';
import {
     useQuery,
    // gql
  } from "@apollo/client";
import PRODUCTS_QUERY from './all-products/index';
import Product from './Product';
// import Cart from './Cart';
import Navbar from './Navbar';

function AllProducts() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY);
    const [cartitems, setCartitems ] = useState([]);

    const addItem = (item) => {
        // this.setState({
        //     cartitems : this.state.cartitems.concat([item])
        // });
        setCartitems(cartitems.concat([item]));
      }  
  
   
        if (loading) return <div>Fetching products.....</div>
        if (error)   return <div>Error fetching products</div>

        const items = data.productLists;
        return (
          <div>
            <Navbar/>
            <div className="container mt-4">
              <div className="row">
                 {items.map(item => <Product key={item.productId} product={item} addItem={addItem} />)}
              </div>
            </div>
          </div>
        );
  }

export default AllProducts;
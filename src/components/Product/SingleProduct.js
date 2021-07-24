import React, { useState, useEffect } from 'react'
import { commerce } from "../Commerce";

function SingleProduct() {
    const [product, setProduct] = useState([])

    const  fetchProducts = async () => {
      const response  = await commerce.products.list();
      setProduct((response && response.data) || []);
    }
    useEffect(() => {
       fetchProducts()
    }, [])
    console.log({ product });
    return (
        <div>
            
        </div>
    )
}

export default SingleProduct

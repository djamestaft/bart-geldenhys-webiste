import React from 'react'
import PropTypes from 'prop-types'
import './ProductCard.css'
import defaultImage from './bart-product.png';

const ProductCard = (backgroundImage) => (
  <div className="product-card">
      {/* <div style={{backgroundImage: `url(${backgroundImage})`, height: '100px'}} /> */}
      <div id="product-image" style={{backgroundImage: `url(${defaultImage})`, height: '200px', width: '200px'}} />
      <div id="product-title">Product Title</div>
      <div id="product-description">
        Pro and Product description and dd 
        Products description and dd Pro and 
        Product ss sdescription and Product 
        description and Pro and Product ss
         description and Product description and  
      </div>
      <div id="product-price">R 350 Per Hour</div>
  </div>
)

ProductCard.propTypes = {
  backgroundImage: PropTypes.string
}

export default ProductCard
